function calculateBmi() {

    let weight = Number(document.getElementById('weight').value);
    let height = Number(document.getElementById('height').value);
    let unit = document.getElementById("unit").value;

    // Convert BEFORE calculating BMI
    if (unit === "lbs") {
        weight = weight * 0.453592;
    }
    // Convert height (inches → cm)
    if (heightUnit === "in") {
        height = height * 2.54;
    }

    let bmi = weight / ((height / 100) * (height / 100));

    document.getElementById("heading").innerHTML = 'Your BMI is:';
    document.getElementById('bmi-output').innerHTML = bmi.toFixed(1);

    // This should be OUTSIDE the unit condition
    if (bmi < 18.5) {
        document.getElementById('message').innerHTML = 'underweight';
    } else if (bmi <= 24.9) {
        document.getElementById('message').innerHTML = 'a healthy weight';
    } else if (bmi <= 29.9) {
        document.getElementById('message').innerHTML = 'overweight';
    } else {
        document.getElementById('message').innerHTML = 'obese';
    }
}