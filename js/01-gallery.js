import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const imageInGallery = function (AllImages) {
	return AllImages
		.map(({ preview, original, description }) =>
				`<div class="gallery__item">
          <a class='gallery__link' href='${original}'>
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
          </a>
        </div>`,
		)
		.join('');
};
galleryEl.innerHTML = imageInGallery(galleryItems);



const clickImg = function (e) {
	e.preventDefault();

	if (e.target.nodeName !== 'IMG') {
		return;
	}
	bigPicture(e.target.dataset.source)
};

galleryEl.addEventListener('click', clickImg);





const bigPicture = function (link) {
	const instance = basicLightbox.create(`<img src='${link}'>`);

	instance.show();

	const closeImage = function (e) {

		if (e.code === 'Escape') {

			document.removeEventListener('keydown', closeImage);

			instance.close();
		}
	};

	document.addEventListener('keydown', closeImage);
};
