  const menu = document.querySelector('.menu');
  const underline = document.querySelector('.menu-underline');
  const items = document.querySelectorAll('.menu .menu-item');

  items.forEach(item => {
    item.addEventListener('mouseenter', e => {
      const { offsetLeft, offsetWidth } = e.target;
      underline.style.width = offsetWidth + 'px';
      underline.style.left = offsetLeft + 'px';
    });
  });

  menu.addEventListener('mouseleave', () => {
    underline.style.width = '0px';
  });