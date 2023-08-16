"use strict";



// Wait until the HTML document is fully loaded before running the code

$(document).ready(function () {

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















    $('button').click(function () {
        let value = $(this).text();
        if (!isNaN(value)) insertNumber(value);
        // Add additional logic for handling other button clicks
    });
});
