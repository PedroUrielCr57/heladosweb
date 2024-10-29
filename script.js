//SECCION PARA QUE HAYA TRANSICION MAS CHIDA 

function redirectWithTransition() {
    const button = document.querySelector('.button');
    button.classList.add('clicked'); // Añade una clase para iniciar la transición

    // Espera a que la transición se complete antes de redirigir
    setTimeout(() => {
        window.location.href = 'helados.html' // Redirige a la nueva página
    }, 300); // Coincide con la duración de la transición en CSS
}

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 1,  // Mantener en 1 para pantallas pequeñas
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 4,
    slideShadows: false
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },
  initialSlide: 0,
  breakpoints: {
    640: {
      slidesPerView: 2  // Para pantallas más grandes, mostrar 2 slides
    },
    1024: {
      slidesPerView: 3  // Para pantallas aún más grandes, mostrar 3 slides
    }
  },
  on: {
    click(event) {
      swiper.slideTo(this.clickedIndex);
    }
  }
});
