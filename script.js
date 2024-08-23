function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Avalia a expressão matemática no display
    } catch (error) {
        display.value = 'Erro'; // Mostra "Erro" se a expressão for inválida
    }
}