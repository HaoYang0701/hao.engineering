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
    typeSpeed: 45,
    backSpeed: 25,
    loop: true,
    startDelay: 600,
    backDelay: 2000
  });

  document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
    document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
  });
});
