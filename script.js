const form = document.querySelector('form');
form.addEventListener('submit', (event) => event.preventDefault());
const input = document.querySelector('#cost-input');
input.addEventListener('keyup', (event) => {
  updateOutputs(event.srcElement.value);
});

const updateOutputs = (inputValue) => {
  document.querySelector('#output-10').textContent = `$${(Math.round(inputValue * 1.1 * 100) / 100).toFixed(2)}`;
  document.querySelector('#output-20').textContent = `$${(Math.round(inputValue * 1.2 * 100) / 100).toFixed(2)}`;
  document.querySelector('#output-25').textContent = `$${(Math.round(inputValue * 1.25 * 100) / 100).toFixed(2)}`;
  document.querySelector('#output-30').textContent = `$${(Math.round(inputValue * 1.3 * 100) / 100).toFixed(2)}`;
  document.querySelector('#output-45').textContent = `$${(Math.round(inputValue * 1.45 * 100) / 100).toFixed(2)}`;
};
