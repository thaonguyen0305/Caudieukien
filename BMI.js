function Caculator() {
    let h = document.getElementById("height").value;
    let w = document.getElementById("weight").value;
    let bmi = Number(h)/(Number(w)^2);
    if(bmi < 18.5){
        document.getElementById("result").innerHTML = "BMI " + bmi + " - Underweight";
    } 
        else if(bmi < 25){
            document.getElementById("result").innerHTML = "BMI " + bmi + " - Normal";
        } else if(bmi < 30){
            document.getElementById("result").innerHTML = "BMI " + bmi + " - Overweight";
        } {
            document.getElementById("result").innerHTML = "BMI " + bmi + " - Obese"
        }     }
