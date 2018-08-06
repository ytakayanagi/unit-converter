// Listen for submit
document.querySelector('#unit-form-mass').addEventListener('submit', function(e) {
   
    // Hide results
    document.querySelector('#results').style.display = 'none';

    // Show loader
    document.querySelector('#loading').style.display = 'block';

    setTimeout(convertResults, 2000);
    
    e.preventDefault();
});

// Convert Results
function convertResults() {
    // UI Vars
    const inputValue = document.querySelector('#value');
    const inputUnit = document.querySelector('#unit');
    const kilogramResult = document.querySelector('#kilogramResult');
    const gramResult = document.querySelector('#gramResult');
    const poundResult = document.querySelector('#poundResult');

    const $value = parseFloat(inputValue.value);
    const $unit = String(inputUnit.value);

    if(!isNaN($value)) {
        // Compute kilogram
        if($unit === "Kilogram") {
            kilogramResult.value = $value;
        } else if($unit === "Gram") {
            kilogramResult.value = $value / 1000;
        } else if($unit === "Pound") {
            kilogramResult.value = $value / 2.2046226218;
        }

        // Compute gram
        if($unit === "Kilogram") {
            gramResult.value = $value * 1000;
        } else if($unit === "Gram") {
            gramResult.value = $value;
        } else if($unit === "Pound") {
            gramResult.value = $value * 453.592;
        }

        // Compute pound
        if($unit === "Kilogram") {
            poundResult.value = $value * 2.2046226218;
        } else if($unit === "Gram") {
            poundResult.value = $value * 2.2046226218 / 10000;
        } else if($unit === "Pound") {
            poundResult.value = $value;
        }

        // Show results
        document.querySelector('#results').style.display = 'block';

        // Hide loader
        document.querySelector('#loading').style.display = 'none';
    } else {
        // Hide loader
        document.querySelector('#loading').style.display = 'none';
        
        showError('PLease check you number');
    }
}

// Show Error
function showError(error) {
    // Create a div
    const errorDiv = document.createElement('div');

    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Add class
    errorDiv.className = 'alert alert-danger';

    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading
    card.insertBefore(errorDiv, heading);

    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
}

// Clear error
function clearError() {
    document.querySelector('.alert').remove();
}