function Calculate() {

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let printBmi = document.getElementById("result");

    let bmi = parseInt(weight) / Math.pow(parseInt(height), 2);
    let resultFixed = (bmi * 10000).toFixed(2);

    if (isNaN(height) || height === "") {
        printBmi.innerHTML = `<div>${height} is not a number </div>`;
    } else if (isNaN(weight) || weight === "") {
        printBmi.innerHTML = `<div>${weight} is not a number </div>`;
    } else {
        printBmi.innerHTML = `<div>${resultFixed}</div>`;
    }
}

let clickbtn = document.querySelector("#btn");
clickbtn.addEventListener("click", Calculate)


