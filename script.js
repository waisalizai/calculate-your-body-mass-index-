


function calculateBmi() {

    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    let bmi = weight / ((height / 100) * (height / 100));

    document.getElementById("heading").innerHTML = 'Your BMI is:';
    document.getElementById('bmi-output').innerHTML = bmi.toFixed(1);

    if (bmi < 18.5) {
        document.getElementById('message').innerHTML = 'You are underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById('message').innerHTML = 'You are a healthy weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById('message').innerHTML = 'You are overweight';
    } 
}

function reload() {
    window.location.reload();
}

