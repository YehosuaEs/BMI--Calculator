function Calculate() {
    /* Getting Values from inputs */
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    /* Calculation */
    let bmi = parseInt(weight) / Math.pow(parseInt(height), 2);
    let resultFixed = (bmi * 10000).toFixed(2);
    /* Giving the values after calculate */
    let printBmi = document.getElementById("result");
    let notNum = printBmi.innerHTML = `<div> Please enter a correct numer </div>`;
    let printResult = printBmi.innerHTML = `<div>${resultFixed}</div>`;
    isNaN(height) || height === "" || isNaN(weight) || weight === "" ? notNum : printResult;
    return resultFixed


}

let clickbtn = document.querySelector("#btn");
// clickbtn.addEventListener("click", Calculate)
clickbtn.addEventListener("click", Gender)

/* MAke the check if is woman or man to display the correct answer */
function Gender() {
    const calculateNum = Calculate();
    console.log(calculateNum);

}


