Polymer({
    is: 'audio-visualizer',

    properties: {
        d: String,
        processorId: String,
        width: {
            type: Number,
            value: 500
        },
        height: {
            type: Number,
            value: 300
        }
    },

    ready: function(){
        document.getElementById(this.processorId)
            .addEventListener('processedData', this.bufferChanged.bind(this));
    },

    bufferChanged: function(e){
        var buffer = e.detail;
        var string = "";
        var sliceWidth = this.width / buffer.length;
        var x = 0;

        for(var i = 0; i < buffer.length; i++) {
            var y = (buffer[i] / 128) * (this.height / 2);

            if(i === 0) {
                string = "M" + x + " " + y;
            } else {
                string +=  "L" + x + " " + y;
            }

            x += sliceWidth;
        }
        this.d = string;
    }
});