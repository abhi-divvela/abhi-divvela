
function calculateBMI(weight, height) {
    return (weight / ((height / 100) * (height / 100))).toFixed(2);
}


function interpretBMI(bmi) {
    if (bmi < 18.5) {
        return "You are underweight.";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "You have a normal weight.";
    } else if (bmi >= 25 && bmi < 30) {
        return "You are overweight.";
    } else {
        return "You are obese.";
    }
}


function BMICalculator() {
    do {
    
        var weight = prompt("Enter your weight in kilograms:");
        var height = prompt("Enter your height in centimeters:");

        var bmi = calculateBMI(weight, height);

       
        var interpretation = interpretBMI(bmi);

     
        alert("Your BMI is: " + bmi + ". " + interpretation);

      
        var checkAgain = confirm("Do you want to check your BMI again?");
    } while (checkAgain);
}
BMICalculator();