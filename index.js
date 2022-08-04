function Calculate() {

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let printBmi = document.getElementById("result");

    let bmi = parseInt(weight) / Math.pow(parseInt(height), 2);
    let resultFixed = (bmi * 10000).toFixed(2);

    let notNum = printBmi.innerHTML = `<div> Please enter a correct numer </div>`;
    let printResult = printBmi.innerHTML = `<div>${resultFixed}</div>`;

    isNaN(height) || height === "" || isNaN(weight) || weight === "" ? notNum : printResult;

}

let clickbtn = document.querySelector("#btn");
clickbtn.addEventListener("click", Calculate)


