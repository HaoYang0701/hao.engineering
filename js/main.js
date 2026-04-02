document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  });

  new Typed('#typed-output', {
    strings: [
      'software engineer',
      'problem solver',
      'builder'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    startDelay: 500,
    backDelay: 2000
  });

  document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
    document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
  });
});
