import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
galleryEl.innerHTML = imageInGallery(galleryItems);

function imageInGallery(AllImages) {
	return AllImages
		.map(({ preview, original, description }) => 
				`<a class='gallery__item' href='${original}'>
            <img class="gallery__image" src="${preview}" alt="${description}">
          </a>`,
		)
		.join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
      caption: true,
      captionsData: 'alt',
      captionDelay: 250,
    });
