


function calculateBmi() {

    let weight = (document.getElementById('weight').value);
    let height = (document.getElementById('height').value);

    let bmi = weight / ((height / 100) * (height / 100));

    document.getElementById("heading").innerHTML = 'Your BMI is:';
    document.getElementById('bmi-output').innerHTML = bmi.toFixed(1);

    if (bmi < 18.5) {
        document.getElementById('message').innerHTML = 'underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById('message').innerHTML = 'a healthy weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById('message').innerHTML = 'overweight';
    } else {
        document.getElementById('message').innerHTML = 'obese';
    }
}

function reload() {
    
}

