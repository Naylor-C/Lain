const anime = require('animejs');

anime({
  targets: '.carregamento',
  value: [0, 1000],
  round: 1,
  easing: 'easeInOutExpo'
});
