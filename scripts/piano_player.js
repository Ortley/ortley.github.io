const toneKeyHTML = '<div class="tone-key"></div>';
const semitoneKeyHTML = '<div class="semitone-key"></div>';
const placeholderSemitoneKeyHTML = '<div class="semitone-key placeholder-key"></div>';
var mouseClick = false;
var activeKey = -1;

document.addEventListener("mousedown", (event) => {
	mouseClick = true;
});
document.addEventListener("mouseup", (event) => {
	mouseClick = false;
});

window.addEventListener("DOMContentLoaded", (event) => {
	let container = document.getElementById("pianoContainer");
	let toneContainer = document.getElementById("pianoTone");
	let semitoneContainer = document.getElementById("pianoSemitone");

	for (n = 0; n < 12; n++) {
		toneContainer.innerHTML += toneKeyHTML;

		if ((n % 7) == 2 || (n % 7) == 6){
			semitoneContainer.innerHTML += placeholderSemitoneKeyHTML;
		}
		else {
			semitoneContainer.innerHTML += semitoneKeyHTML;
		};
	};

	toneContainer.querySelectorAll(".tone-key").forEach((element, index) => {
		element.addEventListener("mouseover", (event) => {
			element.classList.add("hover");
			if (mouseClick == true) {
				element.classList.add("active");
				activeKey = index;
			};
		});
		element.addEventListener("mousedown", (event) => {
			element.classList.add("active");
			activeKey = index;
		})
		element.addEventListener("mouseup", (event) => {
			element.classList.remove("active");
		})
		element.addEventListener("mouseout", (event) => {
			element.classList.remove("hover");
			element.classList.remove("active");
		});
	});

	semitoneContainer.querySelectorAll(".semitone-key:not(.placeholder-key)").forEach((element, index) => {
		element.addEventListener("mouseover", (event) => {
			element.classList.add("hover");
			if (mouseClick == true) {
				element.classList.add("active");
				activeKey = index;

			};
		});
		element.addEventListener("mousedown", (event) => {
			element.classList.add("active");
			activeKey = index;
		})
		element.addEventListener("mouseup", (event) => {
			element.classList.remove("active");
		})
		element.addEventListener("mouseout", (event) => {
			element.classList.remove("hover");
			element.classList.remove("active");
		});
	});
});