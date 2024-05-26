const toneKeyHTML = '<div class="tone-key"></div>';
const semitoneKeyHTML = '<div class="semitone-key"></div>';
const placeholderSemitoneKeyHTML = '<div class="semitone-key placeholder-key"></div>';

window.addEventListener("DOMContentLoaded", (event) => {
	let container = document.getElementById("pianoContainer");
	let toneContainer = document.getElementById("pianoTone");
	let semitoneContainer = document.getElementById("pianoSemitone");
	console.log("loaded")

	for(n=0; n < 12; n++) {
		toneContainer.innerHTML += toneKeyHTML;
		let addedElement = toneContainer.lastElementChild;

		addedElement.addEventListener(
			"mousemove",
			(event) => {
				console.log(event);
			},
			false
		);
		if ((n % 7) == 2 || (n % 7) == 6){
			semitoneContainer.innerHTML += placeholderSemitoneKeyHTML;
		}
		else {
			semitoneContainer.innerHTML += semitoneKeyHTML;
		}
	}

	toneContainer.lastElementChild.classList.add("hover");
	toneContainer.lastElementChild.addEventListener(
		"mouseover",
		(event) => {
			console.log("ok")
		},
		false
	);

	toneContainer.addEventListener(
		"mouseover",
		(event) => {
			console.log(event)
		},
		false
	);
});