const toneKeyHTML = '<div class="tone-key"></div>';
const semitoneKeyHTML = '<div class="semitone-key"></div>';
const placeholderSemitoneKeyHTML = '<div class="semitone-key placeholder-key"></div>';

document.addEventListener("mouseover", (event) => {
	console.log(event.target);
})

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

	toneContainer.querySelectorAll(".tone-key").forEach((element) => {
		element.addEventListener("mouseover", (event) => {
			element.classList.add("hover");
		});
		element.addEventListener("mousedown", (event) => {
			element.classList.add("active");
		})
		element.addEventListener("mouseup", (event) => {
			element.classList.remove("active");
		})
		element.addEventListener("mouseout", (event) => {
			element.classList.remove("hover");
			element.classList.remove("active");
		});
	});

	semitoneContainer.querySelectorAll(".semitone-key:not(.placeholder-key)").forEach(element => {
		element.addEventListener("mouseover", (event) => {
			element.classList.add("hover");
		});
		element.addEventListener("mousedown", (event) => {
			element.classList.add("active");
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