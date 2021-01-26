const nav = document.querySelector('.nav--mobile');

const openNav = e => {
  console.log(e.target.dataset);
  if (e.target.dataset.navButton === 'open') {
    nav.classList.add('is-open');
  } else if (e.target.dataset.navButton === 'close') {
    nav.classList.remove('is-open');
  }
};

export default openNav;
