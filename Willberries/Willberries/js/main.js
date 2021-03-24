const mySwiper = new Swiper('.swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});

// cart

const buttonCart = document.querySelector('.button-cart'),
	  modalCart = document.querySelector('#modal-cart'),
	  modalClose = document.querySelector('.modal-close')

const openModal = function() {
	modalCart.classList.add('show');
}
const closeModal = function() {
	modalCart.classList.remove('show');
}

buttonCart.addEventListener('click', openModal)
modalClose.addEventListener('click', closeModal)

modalCart.addEventListener('click', (e) => {
	if (e.target === modalCart || e.target === modalClose) {
		closeModal();
	}
});

// scroll smooth
const scrollLinks = document.querySelectorAll('a.scroll-link')

{
	for (let i = 0; i < scrollLinks.length; i++){
		scrollLinks[i].addEventListener('click', function(event) {
			event.preventDefault();
			const id = scrollLinks[i].getAttribute('href');
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth', // какая прокрутка будет?
				block: 'start' // до куда будет прокрутка
			})
		})
	}
}
