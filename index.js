// CALCULATOR PROGRAM - 3 functions used in HTML

const display = document.getElementById('display'); // select ID of display

// Append input to display
function appendToDisplay(input) {
    display.value += input;
}

// Clear display
function clearDisplay() {
    display.value = ''; // clear display
}

// Calculate
function Calculate() {
    try {
        display.value = eval(display.value); // eval will evaluate the expression
    }
    catch(error) { // if there is an error, ex. 7 + then [Enter]
        display.value = 'Error';
    }
}