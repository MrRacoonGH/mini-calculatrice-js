let display = document.getElementById('display');

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  if (display.value !== '' && !isNaN(display.value.slice(-1))) {
    display.value += operator;
  }
}

function calculate() {
  try {
    display.value = eval(display.value); // Attention avec eval
  } catch (error) {
    display.value = "Erreur";
  }
}

function resetCalculator() {
  display.value = '';
}

// Fonction pour gérer les événements de clavier
document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (!isNaN(key)) { // Si la touche est un chiffre
    appendNumber(key);
  } else if (['+', '-', '*', '/'].includes(key)) { // Si la touche est un opérateur
    appendOperator(key);
  } else if (key === 'Enter' || key === '=') { // Si la touche est Entrée ou "="
    calculate();
  } else if (key === 'Backspace') { // Si la touche est Retour arrière
    display.value = display.value.slice(0, -1);
  } else if (key === 'Escape' || key === 'C' || key === 'c') { // Si la touche est Échap ou "C"
    resetCalculator();
  }
});
