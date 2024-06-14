const toneKeyHTML = '<div class="tone-key"></div>';
const semitoneKeyHTML = '<div class="semitone-key"></div>';
const placeholderSemitoneKeyHTML = '<div class="semitone-key placeholder-key"></div>';

var mouseClick = false;
var activeKey = -1;
var previousKey = -1;

window.onload = function() {
	MIDI.loadPlugin({
		soundfontUrl: "./soundfont/",
		instrument: "acoustic_grand_piano",
		onprogress: function(state, progress) {
			console.log(state, progress);
		},
	});
};

window.addEventListener("DOMContentLoaded", () => {
	generatePiano(21, 108);
})

function generatePiano(from, to) {
	let container = document.getElementById("pianoContainer");
	let toneContainer = document.getElementById("pianoTone");
	let semitoneContainer = document.getElementById("pianoSemitone");

	for (let n = from; n <= to; n++) {
		if (n % 2 == (n % 12 > 4)) {
			toneContainer.innerHTML += toneKeyHTML;
			toneContainer.lastChild.innerHTML = n;	
		}
		else {
			semitoneContainer.innerHTML += semitoneKeyHTML;
			semitoneContainer.lastChild.innerHTML = n;
			if (n % 12 == 3 | n % 12 == 10) {
				semitoneContainer.innerHTML += placeholderSemitoneKeyHTML;
			}
		}
	}

	toneContainer.querySelectorAll(".tone-key").forEach((element, index) => {
		configureKey(element)
	});

	semitoneContainer.querySelectorAll(".semitone-key").forEach((element, index) => {
		configureKey(element)
	});

	scrollToCenter(container);
}

document.onmousedown = function() {
	mouseClick = true;
};
document.onmouseup = function() {
	mouseClick = false;
};

function scrollToCenter(container) {
	console.log("resize", container)
	container.scrollBy(-999999, -999999);
	container.scrollBy(container.scrollWidth / 2 - container.offsetWidth / 2, 
			container.scrollHeight / 2 - container.offsetHeight / 2);
}

function configureKey(element) {
	element.addEventListener("mouseover", (e) => {
		element.classList.add("hover");
		if (mouseClick == true) {
			element.classList.add("active");
			activeKey = element.innerHTML;
		};
	});
	element.addEventListener("mouseenter", (e) => {
		if (mouseClick == true) {
			newKey();
		}
	})
	element.addEventListener("mousedown", (e) => {
		element.classList.add("active");
		activeKey = element.innerHTML;
		newKey();
	});
	element.addEventListener("mouseup", (e) => {
		element.classList.remove("active");
	});
	element.addEventListener("mouseout", (e) => {
		element.classList.remove("hover");
		element.classList.remove("active");
	});
}

function playNote(note, velocity) {
	MIDI.setVolume(127, 127);
	MIDI.noteOn(0, note, velocity, 0);
	MIDI.noteOff(0, note, 2.0);
}
function newKey() {
	playNote(activeKey, 511);
};