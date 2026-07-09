function calculateBmi() {

    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');

    const weight = Number(weightInput.value);
    const height = Number(heightInput.value);

    if (!weight || !height || weight <= 0 || height <= 0) {
        document.getElementById("heading").innerHTML = '';
        document.getElementById('bmi-output').innerHTML = '';
        document.getElementById('message').innerHTML = 'Please enter valid weight and height.';
        return;
    }

    const bmi = weight / ((height / 100) * (height / 100));

    document.getElementById("heading").innerHTML = 'Your BMI is:';
    document.getElementById('bmi-output').innerHTML = bmi.toFixed(1);

    let message = '';

    if (bmi < 18.5) {
        message = 'underweight';
    } else if (bmi <= 24.9) {
        message = 'a healthy weight';
    } else if (bmi <= 29.9) {
        message = 'overweight';
    } else {
        message = 'obese';
    }

    document.getElementById('message').innerHTML = message;
}