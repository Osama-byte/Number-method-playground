const input = document.getElementById("numInput");

input.addEventListener("input", () => {
    let value = input.value;
    let num = Number(value);

    document.getElementById("toFixed").innerText =
        isNaN(num) ? "Invalid" : num.toFixed(2);

    document.getElementById("toPrecision").innerText =
        isNaN(num) ? "Invalid" : num.toPrecision(4);

    document.getElementById("toExponential").innerText =
        isNaN(num) ? "Invalid" : num.toExponential(3);

    document.getElementById("parseInt").innerText = parseInt(value);
    document.getElementById("parseFloat").innerText = parseFloat(value);

    document.getElementById("isNaN").innerText = isNaN(num);
    document.getElementById("isFinite").innerText = isFinite(num);
    document.getElementById("isInteger").innerText = Number.isInteger(num);

    document.getElementById("maxValue").innerText =
        isNaN(num) ? "Invalid" : num < Number.MAX_VALUE;

    document.getElementById("minValue").innerText =
        isNaN(num) ? "Invalid" : num > Number.MIN_VALUE;
});
