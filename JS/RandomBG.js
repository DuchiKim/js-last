const images = ['1.jpeg', '2.jpeg', '3.jpeg'];
const bgimage = images[Math.floor(Math.random() * images.length)];
const rdimage = document.createElement('img');

rdimage.src = `Image/${bgimage}`;

document.body.appendChild(rdimage);
