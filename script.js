// soraia
let weight = parseFloat(prompt("digite seu peso"))
let height = parseFloat(prompt("digite sua altura"))
let imc = weight / (height * height)

function BMIcalculator(weight, height) {
    if (weight <= 0 || height <= 0) {
        return "invalid values !";
    }
    let bmi = weight / (height * height);
    return bmi.toFixed(2);  // returns the bmi with 2 decimall places
}

function classificarIMC(bmi) {
    if (bmi < 18.5) return "Undeweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Over weight";
    if (bmi < 35) return "Obesity grade I";
    if (bmi < 40) return "Obesity grade II";

}

alert(imc)
