


// function 
// get values 
// calculate 
// output 

// bmi formula weight / height squard * 703



function calculateBmi () {


    let weight = document.getElementById ('weight').value
    let height = document.getElementById ('height').value

    let bmi = (weight/(height * height) * 703)

    document.getElementById ("heading").innerHTML = 'Your BMI is :'
    document.getElementById ('bmi-output').innerHTML = bmi


}
