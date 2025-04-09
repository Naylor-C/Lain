const anime = require('animejs');

anime({
  targets: '.carregamento',
  value: [0, 1000],
  round: 1,
  easing: 'easeInOutExpo'
});

document.addEventListener('DOMContentLoaded', function() {
  const binaryBackground = document.getElementById('binary-background');
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  // Cria colunas de números binários
  for (let i = 0; i < 50; i++) {
      const column = document.createElement('div');
      column.style.position = 'absolute';
      column.style.left = `${Math.random() * width}px`;
      column.style.top = `-${Math.random() * height}px`;
      
      // Gera números binários (0 ou 1) em cada coluna
      for (let j = 0; j < 20; j++) {
          const binary = document.createElement('div');
          binary.className = 'binary';
          binary.textContent = Math.random() > 0.5 ? '1' : '0';
          binary.style.animationDuration = `${5 + Math.random() * 10}s`;
          binary.style.animationDelay = `${Math.random() * 5}s`;
          column.appendChild(binary);
      }
      
      binaryBackground.appendChild(column);
  }
});