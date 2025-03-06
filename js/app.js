let display = document.getElementById('display');

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  display.value += operator;
}

function calculate() {
  try {
    display.value = eval(display.value); // Évalue l'expression (utiliser avec prudence)
  } catch (error) {
    display.value = "Erreur";
  }
}

function resetCalculator() {
  display.value = '';
}
