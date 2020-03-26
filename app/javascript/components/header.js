const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.header');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight/2.5) {
        navbar.classList.add('header-white');
      } else {
        navbar.classList.remove('header-white');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
