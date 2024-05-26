var isMouseDown = false;
var isMouseIn = false;
var mousePosition = [0, 0];
var mouseKey = 0;


class Note {
    static c4 = 261.63;
    constructor(noteNum) {
        this.audioCtx = new(window.AudioContext || window.webkitAudioContext);
        this.note = noteNum;
        this.oscillator = this.audioCtx.createOscillator();

        this.oscillator.type = "square";
        this.oscillator.frequency.value = this.noteToFrequency(this.note);
        this.oscillator.connect(this.audioCtx.destination);

        this.active = false;
        /* this.oscillator.start(); */
    }

    noteToFrequency(note) {
        return Note.c4 * Math.pow(2, (note - 60) / 12);
    }

    play() {
        if (!this.active) {
            this.oscillator.start();}
        this.active = true;
    }
    stop() {
        if (this.active) {
            this.oscillator.stop();}
        this.active = false;
    }
}


/* function playFrequency(freq, time) {
    var oscillator = audioCtx.createOscillator;

    oscillator.type = 'square';
    oscillator.frequency.value = frequency; // value in hertz
    oscillator.connect(audioCtx.destination);
    oscillator.start();
  
    setTimeout(
        function() {
            oscillator.stop();
            playMelody();
        }, duration
    );
}
 */

class Key {
    static baseWidth = 50;
    static spacing = 1;
    static colorActive = "#ffffff";
    static colorInActive = "#999999";
    static audio = new Audio();

    constructor (context, keyNote) {
        this.context = context;
        this.keyNote = keyNote;
        this.isPlaying = false;
        this.wasPlaying = false;
        this.player = new Note(keyNote);
    }

    draw() {
        this.wasPlaying = this.isPlaying
        this.isPlaying = isMouseIn && isMouseDown && (mouseKey == this.keyNote);


        this.context.fillStyle = this.isPlaying ? Key.colorInActive : Key.colorActive;
        this.context.fillRect(this.keyNote * (Key.baseWidth + Key.spacing), 0, Key.baseWidth, 50);
    }
}

class Piano {
    static minNote = 0;
    static maxNote = 100;

    constructor (canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext("2d");
        this.boundingBox = this.canvas.getBoundingClientRect();
        /* console.log(this.boundingBox); */

        this.canvas.onmouseenter = () => {
            isMouseIn = true
        };
        this.canvas.onmouseleave = () => {
            isMouseIn = false
        };
        document.onmousedown = () => {
            isMouseDown = true
        };
        document.onmouseup = () => {
            isMouseDown = false
        };
        this.canvas.addEventListener("mousemove", () => {
            this.mouseMove(event)
        });


        this.keyObjects = [];
        this.createKeys();

        this.audioPlayer = new Audio();
        this.audioPlayer

        window.requestAnimationFrame(() => this.loop());
    }

    createKeys() {
        for(let note = Piano.minNote; note < Piano.maxNote; note++) {
            this.keyObjects.push(new Key(this.context, note));
        }
    }

    mouseDown() {
        isMouseDown = true;
    }

    mouseUp() {
        isMouseDown = false;
    }

    mouseMove(event) {
        mousePosition = [event.clientX - this.boundingBox.left, event.clientY - this.boundingBox.top];
        mouseKey = Math.floor(mousePosition[0] / (Key.baseWidth + Key.spacing));
    }

    loop() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // Clear the canvas
        for(let i = 0; i < this.keyObjects.length; i++) {
            this.keyObjects[i].draw();
        }
        setTimeout(() => {
            window.requestAnimationFrame(() => this.loop());
        }, 10);
    }
}

window.onload = function() {
    document.getElementById("pianoCanvas").addEventListener("mousedown", startPiano, {once : true});
}

function startPiano() {
    let piano = new Piano("pianoCanvas");
}