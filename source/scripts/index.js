/* в этот файл добавляет скрипты*/

document.addEventListener('DOMContentLoaded', () => {
  const navList = document.querySelector('.site-nav__list');
  const toggleButton = document.querySelector('.js-toggle-button');
  const svgIcon = toggleButton.querySelector('.menu-list__icon use');

  navList.classList.add('site-nav__list--js-loaded');
  navList.classList.add('site-nav__list--closed');
  svgIcon.setAttribute('href', 'images/icons/stack.svg#menu-burger');

  toggleButton.addEventListener('click', () => {
    if (svgIcon.getAttribute('href').endsWith('menu-burger')) {
      svgIcon.setAttribute('href', 'images/icons/stack.svg#menu-cross');
      navList.classList.remove('site-nav__list--closed');
    } else {
      svgIcon.setAttribute('href', 'images/icons/stack.svg#menu-burger');
      navList.classList.add('site-nav__list--closed');
    }
  });
});
