let toneKey = '<div class="tone-key"></div>';

window.addEventListener("DOMContentLoaded", function () {
	let keyHtml = "<p>Hello World!</p>";
	let container = document.getElementById("pianoContainer");
	let toneContainer = document.getElementById("pianoTone");
	let semitoneContainer = document.getElementById("pianoSemitone");

	toneContainer.innerHTML += toneKey;
	semitoneContainer.innerHTML = +toneKey;

	console.log(container.childNodes);
});
