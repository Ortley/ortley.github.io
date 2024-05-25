let isMouseDown = false;
let mousePosition = [0, 0];
let mouseKey = 0;

class Key {
    static baseWidth = 10;
    static spacing = 1;
    static colorActive = "#ffffff";
    static colorInActive = "#999999";
    static audio = new Audio();

    constructor (context, keyNote) {
        this.context = context;
        this.keyNote = keyNote;
        this.isPlaying = false;
    }

    playNote() {
        
    }

    draw() {
        this.isPlaying = isMouseDown && (mouseKey == this.keyNote);
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

        this.canvas.addEventListener("mousedown", this.mouseDown.bind(this));
        this.canvas.addEventListener("mouseup", this.mouseUp.bind(this));
        this.canvas.addEventListener("mousemove", this.mouseMove.bind(this));

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
        mousePosition = [event.clientX, event.clientY];
        mouseKey = Math.floor(mousePosition[0] / (Key.baseWidth + Key.spacing) - 0.5);
    }

    loop() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // Clear the canvas
        for(let i = 0; i < this.keyObjects.length; i++) {
            this.keyObjects[i].draw();
        }
        setTimeout(() => {
            window.requestAnimationFrame(() => this.loop());
        }, 0);
    }
}

window.onload = function() {
    let piano = new Piano("pianoCanvas");
    console.log(mousePosition);
}
