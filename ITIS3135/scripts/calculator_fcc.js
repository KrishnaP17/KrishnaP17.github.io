window.onload = () => {
    const display = document.querySelector('.display');
    const keys = document.querySelectorAll('.keys button');
    const specialCharacters = ["%", "*", "/", "-", "+", "="];
    let output = "";

    const calculate = (keyValue) => {
        if (keyValue === "=" && output !== "") {
            output = eval(output.replace("%", "/100"));
        } else if (keyValue === "AC") {
            output = "";
        } else if (keyValue === "DEL") {
            output = output.toString().slice(0, -1);
        } else if (specialCharacters.includes(keyValue)) {
            output += keyValue;
        } else {
            output += keyValue;
        }
        display.value = output;
    }

    keys.forEach((key) => {
        key.addEventListener("click", (e) => calculate(e.target.dataset.value));
    });
}








