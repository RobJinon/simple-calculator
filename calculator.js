$(document).ready(function() {
    var result = $("#result");
    var input = $("#input");
    var buttons = $(".input-btn");
    var equalButton = $(".equal");
    var clearButton = $(".clear");
  
    // Click event handler for buttons
    buttons.click(function() {
      var buttonValue = $(this).text();
      input.val(input.val() + buttonValue);
    });
  
    // Keydown event handler for keyboard input
    $(document).keydown(function(e) {
      var key = e.key;
      var validKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "=", "Enter", "Backspace"];
  
      if (validKeys.includes(key)) {
        if (key === "Enter" || key === "=") {
          calculate();
        } else if (key === "Backspace") {
          input.val(input.val().slice(0, -1));
        } else {
            updateResult(key);
        }
      }
    });

    function updateResult(value) {
        var currentValue = input.val();

        // Check if the current input is an operator
        if (isOperator(value)) {
            // Check if the last input is also an operator
            if (isOperator(currentValue[currentValue.length - 1])) {
                return; // Ignore the input
            }
        }

        input.val(currentValue + value);
    }
  
    // Click event handler for equal button
    equalButton.click(function() {
      calculate();
    });
  
    // Click event handler for clear button
    clearButton.click(function() {
      input.val("");
      result.val("");
    });
  
    // Function to evaluate and display the result
    function calculate() {
      var expression = input.val();
      var resultValue = eval(expression);
      result.val(resultValue);
    }

    function isOperator(char) {
        var operators = ["+", "-", "*", "/"];
        return operators.includes(char);
      }
  });
  