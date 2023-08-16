"use strict";


// Wait until the HTML document is fully loaded before running the code


// Initialize a variable to keep track of the current input (leftOperand, operator, or rightOperand)

let currentInput = 'leftOperand';

// Function to insert a number into the current input field


function insertNumber(number) {

    // Concatenate the new number with the existing value in the current input field

    $('#' + currentInput).val($('#' + currentInput).val() + number);

    // Update the current input based on the existing state


    if (currentInput === 'leftOperand') currentInput = 'operator';
    else if (currentInput === 'operator') currentInput = 'rightOperand';
}

// Function to insert an operator into the operator input field

function insertOperator(operator) {

    // Only insert the operator if the current input is the operator field
    if (currentInput !== 'operator') return;

    $('#' + currentInput).val(operator);
    currentInput = 'rightOperand';


}



