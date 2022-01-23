import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');


const galleryItemsRef = galleryItems.map((item) => 
`<a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a>`).join("");


galleryRef.insertAdjacentHTML("afterbegin", galleryItemsRef);
