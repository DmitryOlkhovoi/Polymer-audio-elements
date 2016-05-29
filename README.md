# Polymer audio elements

![alt tag](https://github.com/DmitryTrigonis/Polymer-audio-elements/blob/master/wave.png?raw=true)

  - audio-processor(mic only)
  - audio-vizualize(svg waveform)

#audio-processor
####Usage

````html
  <audio-processor id="processor1"></audio-processor>
````
Use **id** for identity processor for further using.

##API
####Properties
```js
properties: {
        fps: { //frame rate per second
            type: Number,
            value: 60
        },
        fftSize: { //fft size [32-2048]
            type: Number,
            value: 2048
        }
},
```

####Events
 - processedData (Uint8Array buffer)


#audio-visualizer
####Usage
```html
  <audio-visualizer processor-id="processor1"></audio-visualizer>
```
Use **id** to specify audio-processor.
##API

####Properties
```js
properties: {
        processorId: String,
        //size of svg
        width: {
            type: Number,
            value: 500
        },
        height: {
            type: Number,
            value: 300
        }
}
```

####Custom properties
- --bg: #212121; //svg background
- --wave-fill: none;
- --wave-stroke: #E91E63; 

####Mixins
- --svg-mix
- --wave-mix

MIT
