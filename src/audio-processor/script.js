Polymer({
    is: 'audio-processor',

    properties: {
        fps: {
            type: Number,
            value: 60
        },
        fftSize: {
            type: Number,
            value: 2048
        }
    },

    created: function(){
        var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        var analyser = audioCtx.createAnalyser();

        navigator.getUserMedia  = navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia;

        navigator.getUserMedia({audio: true}, function(stream) {
            var source = audioCtx.createMediaStreamSource(stream);
            source.connect(analyser);
            analyser.fftSize = this.fftSize;

            var bufferLength = analyser.frequencyBinCount;
            var buffer = new Uint8Array(bufferLength);

            var self = this;
            function processData(){
                setTimeout(function() {
                    requestAnimationFrame(processData);
                }, 1000 / this.fps);

                analyser.getByteTimeDomainData(buffer);

                self.fire('processedData', buffer);
            }

            processData();
        }.bind(this), function(){
            throw "Unable to access the microphone";
        });

    }
});