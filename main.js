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

        $('#leftOperand').val(' ');
        $('#operator').val(' ');
        $('#rightOperand').val(' ');
        currentInput = 'leftOperand';


    }

    // Function to calculate the result based on the current input values

    function calculateResults() {

        // Retrieve the values from the input fields

        let left = parseFloat($('#leftOperand').val());
        let operator = $('#operator').val();
        let right = parseFloat($('#rightOperand').val());
        let result;

        switch (operator) {
            case '+':
                result = left + right;
                break;

            case '-':
                result = left - right;
                break;
            case '*':
                result = left * right;
                break;

            case '/':
                result = left / right;
                break;


        }

        alert("Result: " + result);


    }

    // Attach a click handler to all button elements

    $('button').click(function () {

        // Retrieve the text content of the clicked button

        let value = $(this).text();

        // Determine the appropriate action based on the button's value


        // If it's a number, call insertNumber

        if (!isNaN(value)) insertNumber(value);

        // If it's 'C', call clearInputs

        else if (value === 'C') clearInputs();

        // If it's '=', call calculateResult

        else if (value === '=') calculateResults();

        // Otherwise, call insertOperator (for arithmetic operators)


        else insertOperator(value);


    });


});






