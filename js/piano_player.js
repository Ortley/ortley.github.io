const toneKeyHTML = '<div class="tone-key"></div>';
const semitoneKeyHTML = '<div class="semitone-key"></div>';
const placeholderSemitoneKeyHTML = '<div class="semitone-key placeholder-key"></div>';
const indexToMidi = {
	0: 0,
	0.5: 1,
	1: 2,
	1.5: 3,
	2: 4,
	3: 5,
	3.5: 6,
	4: 7,
	4.5: 8,
	5: 9,
	5.5: 10,
	6: 11,
}
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
		onsuccess: function() {
			console.log("ok")
			var delay = 0.25; // play one note every quarter second
			var note = 60; // the MIDI note
			var velocity = 127; // how hard the note hits
			// play the note
			MIDI.setVolume(127, 127);
			MIDI.noteOn(0, note, velocity, delay);
			MIDI.noteOff(0, note, delay + 0.75);
		}
	});
};

window.addEventListener("DOMContentLoaded", () => {
	generatePiano(60, 72)
})

function generatePiano(from, to) {
	let container = document.getElementById("pianoContainer");
	let toneContainer = document.getElementById("pianoTone");
	let semitoneContainer = document.getElementById("pianoSemitone");

	for (n = from; n < to; n++) {
		toneContainer.innerHTML += toneKeyHTML;
		toneContainer.lastChild.innerHTML = n;

		if (((n - 60) % 7) == 2 || ((n - 60) % 7) == 6){
			semitoneContainer.innerHTML += placeholderSemitoneKeyHTML;
		}
		else {
			semitoneContainer.innerHTML += semitoneKeyHTML;
			semitoneContainer.lastChild.innerHTML = n;
		};
	};

	toneContainer.querySelectorAll(".tone-key").forEach((element, index) => {
		element.addEventListener("mouseover", (e) => {
			element.classList.add("hover");
			if (mouseClick == true) {
				element.classList.add("active");
				activeKey = indexToMidi[index % 7] + Math.floor(index / 7) * 12 + 60;
			};
		});
		element.addEventListener("mouseenter", (e) => {
			if (mouseClick == true) {
				newKey();
			}
		})
		element.addEventListener("mousedown", (e) => {
			element.classList.add("active");
			activeKey = indexToMidi[index % 7] + Math.floor(index / 7) * 12 + 60;
			newKey();
		});
		element.addEventListener("mouseup", (e) => {
			element.classList.remove("active");
		});
		element.addEventListener("mouseout", (e) => {
			element.classList.remove("hover");
			element.classList.remove("active");
		});
	});

	semitoneContainer.querySelectorAll(".semitone-key").forEach((element, index) => {
		element.addEventListener("mouseover", (e) => {
			element.classList.add("hover");
			if (mouseClick == true) {
				element.classList.add("active");
				activeKey = indexToMidi[(index + 0.5) % 7] + Math.floor((index + 0.5) / 7) * 12 + 60;
			};
		});
		element.addEventListener("mouseenter", (e) => {
			if (mouseClick == true) {
				newKey();
			}
		})
		element.addEventListener("mousedown", (e) => {
			element.classList.add("active");
			activeKey = indexToMidi[(index + 0.5) % 7] + Math.floor((index + 0.5) / 7) * 12 + 60;
			newKey();
		});
		element.addEventListener("mouseup", (e) => {
			element.classList.remove("active");
		});
		element.addEventListener("mouseout", (e) => {
			element.classList.remove("hover");
			element.classList.remove("active");
		});
	});
}

document.onmousedown = function() {
	mouseClick = true;
};
document.onmouseup = function() {
	mouseClick = false;
};
/* document.onmousemove = function() {
	if (activeKey != previousKey) {
		newKey();
	};
	previousKey = activeKey;
}; */


function playNote(note, velocity) {
	MIDI.setVolume(127, 127);
	MIDI.noteOn(0, note, velocity, 0);
	MIDI.noteOff(0, note, 2.0);
}
function newKey() {
	playNote(activeKey, 511);
};