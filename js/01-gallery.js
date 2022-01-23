import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryRef = document.querySelector('.gallery');


const galleryItemsRef = galleryItems.map((item) => 
`<div class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a></div>`).join("");


galleryRef.insertAdjacentHTML("afterbegin", galleryItemsRef);


galleryRef.addEventListener("click", onGalleryImageClick);

function onGalleryImageClick(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== "IMG") {
        return;
    }
    console.log(event.target.dataset.source);

    basicLightbox.create(`
		<img src="${event.target.dataset.source}">
	`).show()

    
};
