const loader = document.querySelector('.loader');
const colors = ["#c078d4", "#a3e0ff", "#fff3b4", "#589adc", "#ffffff", '#fcab31', '#a3e0ff', '#292929', '#c078d4', '#fff3b4', '#589adc'];

let animationCount = 0;
let colorIndex = 0;

loader.addEventListener('animationiteration', () => {
  const color = colors[colorIndex];
  loader.style.transition = "color 0.7s ease-in-out"; // Smooth transition
  loader.style.color = color;
  colorIndex = (colorIndex + 1) % colors.length;
});
