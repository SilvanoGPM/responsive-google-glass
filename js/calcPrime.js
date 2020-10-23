
function calc() {
    const GLASS_PRICE = 1500;
    const total = document.getElementById("tot");
    const quant = document.getElementById("quant").value;
    const price = GLASS_PRICE * quant;
    if (price >= 0 && price <= 10) {
        total.value = price;
    } else {
        total.value = 0;
    }
}