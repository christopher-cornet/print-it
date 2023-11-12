const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Variables and elements
const ARROW_LEFT = document.querySelector(".arrow_left");
const ARROW_RIGHT = document.querySelector(".arrow_right");
const DOTS = document.querySelector(".dots");

let index = 0; // Index of the selected bullet point

// Create the bullet points
let addBulletPoints = () => {
	for (element in slides) {
		const BULLETPOINT = document.createElement("div");
		BULLETPOINT.classList.add("dot");
		DOTS.appendChild(BULLETPOINT);
	}
	const BULLETPOINT = document.querySelectorAll(".dot");
	BULLETPOINT[0].classList.add("dot_selected");
}

// Change the selected bullet point
let changeSlide = (direction) => {
	const BULLETPOINT = document.querySelectorAll(".dot");

	if (direction == "right") {
		if (index == slides.length - 1) {
			BULLETPOINT[3].classList.toggle("dot_selected");
			BULLETPOINT[0].classList.add("dot_selected");
			index = 0;
		}
		else {
			BULLETPOINT[`${index}`].classList.toggle("dot_selected");
			BULLETPOINT[`${index + 1}`].classList.toggle("dot_selected");
			index++;
		}
	}
	else {
		if (index == 0) {
			BULLETPOINT[0].classList.toggle("dot_selected");
			BULLETPOINT[3].classList.add("dot_selected");
			index = 3;
		}
		else {
			BULLETPOINT[`${index}`].classList.toggle("dot_selected");
			BULLETPOINT[`${index - 1}`].classList.toggle("dot_selected");
			index--;
		}
	}
}

// Change the background image
let changeImage = () => {
	const IMAGE = document.querySelector(".banner-img");
	const TEXT = document.querySelector("#banner p");
	
	IMAGE.src = `./assets/images/slideshow/${slides[index].image}`;
	TEXT.innerHTML = `${slides[index].tagLine}`;
}

addBulletPoints();

// Events

// Left arrow
ARROW_LEFT.addEventListener("click", () => {
	changeSlide("left");
	changeImage();
});

// Right arrow
ARROW_RIGHT.addEventListener("click", () => {
	changeSlide("right");
	changeImage();
});