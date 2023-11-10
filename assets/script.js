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
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");

let dots = document.querySelector(".dots");

let index = 0; // Index in slides


// queryselectorall pour avoir ts les bullet points


// Create the bullet points
let addBulletPoints = () => {
	for (element in slides) {
		let bulletPoint = document.createElement("div");
		bulletPoint.classList.add("dot", `dot${element}`);
		dots.appendChild(bulletPoint);
	}
	let bulletPoint1 = document.querySelector(".dot0");
	bulletPoint1.classList.add("dot_selected");
}

// Change the selected bullet point
let changeSlide = () => {
	let bulletPoint0 = document.querySelector(".dot0");
	let bulletPoint1 = document.querySelector(".dot1");
	let bulletPoint2 = document.querySelector(".dot2");
	let bulletPoint3 = document.querySelector(".dot3");

	if (bulletPoint0.classList.contains("dot_selected")) {
		bulletPoint0.classList.toggle("dot_selected");
		bulletPoint1.classList.add("dot_selected");
		index++;
	}
	else if (bulletPoint1.classList.contains("dot_selected")) {
		bulletPoint1.classList.toggle("dot_selected");
		bulletPoint2.classList.add("dot_selected");
		index++;
	}
	else if (bulletPoint2.classList.contains("dot_selected")) {
		bulletPoint2.classList.toggle("dot_selected");
		bulletPoint3.classList.add("dot_selected");
		index++;
	}
	else if (bulletPoint3.classList.contains("dot_selected")) {
		bulletPoint3.classList.toggle("dot_selected");
		bulletPoint0.classList.add("dot_selected");
		index = 0;
	}

	console.log(index); // 0, 1, 2, 3 en boucle
}

addBulletPoints();

// Events

// Left arrow
arrow_left.addEventListener("click", () => {
	console.log("left");
});

// Right arrow
arrow_right.addEventListener("click", () => {
	console.log("right");
	changeSlide();
});