import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => 
    
    `<div class= 'gallery__item'>
        <a class = 'gallery__link href=${original}'>
        <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
        </a>
        </div>`
        
        
).join('');
gallery.insertAdjacentHTML(`afterbegin`, markup);

gallery.addEventListener('click', originalImage);

function originalImage(event) {

    event.preventDefault();
    console.log(event.target.nodeName)
    if (event.target.nodeName !== `IMG`) {
        return;
    }
    const modalWindow = basicLightbox.create(
        `<img src="${event.target.dataset.source}" width="800" height="600">`);
    modalWindow.show();




    if (modalWindow.show() === true) {
        document.addEventListener('keydown', event => {
            if (event.code === 'Escape') {
                modalWindow.close();
            }
        });
    } else {
        document.removeEventListener('keydown', event => {
            if (event.code === 'Escape') {
                modalWindow.close();
            }
        });
    }
};
