document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  });

  new Typed('#typed-output', {
    strings: [
      'software engineer',
      'mass token consumer',
      'yaml indentation survivor',
      'git rebase enthusiast',
      'stackoverflow archaeologist'
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

  document.getElementById('copy-email')?.addEventListener('click', (e) => {
    e.preventDefault();
    const email = e.currentTarget.dataset.email;
    navigator.clipboard.writeText(email).then(() => {
      e.currentTarget.classList.add('copied');
      setTimeout(() => e.currentTarget.classList.remove('copied'), 2000);
    });
  });
});
