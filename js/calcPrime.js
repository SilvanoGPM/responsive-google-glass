
function calc() {
    const GLASS_PRICE = 1500;
    const total = document.getElementById("tot");
    const quant = document.getElementById("quant").value;
    const price = GLASS_PRICE * quant;
    total.value = (price >= 0)   ? price : 0;
}