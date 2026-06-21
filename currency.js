const prices = {
  product1: { USD: 25.50, AED: 93.60, EUR: 23.40 },
  product2: { USD: 40.00, AED: 147.20, EUR: 36.80 }
};
function setCurrency(currency) {
  document.getElementById("price1").innerText = prices.product1[currency] + " " + currency;
  document.getElementById("price2").innerText = prices.product2[currency] + " " + currency;
}
