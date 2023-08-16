"use strict";


// Wait until the HTML document is fully loaded before running the code

$(document).ready(function () {


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

// Function to clear all input fields and reset the current input state

    function clearInputs() {

        $('#leftOperand').value(' ');
        $('#operator').value(' ');
        $('#rightOperand').value(' ');
        currentInput = 'leftOperand';


    }


});






