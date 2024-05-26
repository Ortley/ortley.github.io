const toneKeyHTML = '<div class="tone-key"></div>';
const semitoneKeyHTML = '<div class="semitone-key"></div>';
const placeholderSemitoneKeyHTML = '<div class="semitone-key placeholder-key"></div>';

window.addEventListener("DOMContentLoaded", function () {
	let container = document.getElementById("pianoContainer");
	let toneContainer = document.getElementById("pianoTone");
	let semitoneContainer = document.getElementById("pianoSemitone");

	for(n=0; n < 12; n++) {
		toneContainer.innerHTML += toneKeyHTML;
		let addedElement = toneContainer.lastElementChild;

		addedElement.addEventListener("mouseover", function() {
			console.log("ok");
			document.getElementById("pianoTone").innerHTML = "";
		})
		if ((n % 7) == 2 || (n % 7) == 6){
			semitoneContainer.innerHTML += placeholderSemitoneKeyHTML;
		}
		else {
			semitoneContainer.innerHTML += semitoneKeyHTML;
		}
	}

	toneContainer.lastElementChild.classList.add("hover");
	toneContainer.lastElementChild.addEventListener("mouseover", function() {console.log("ok")});
});
