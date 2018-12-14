const form = document.querySelector("#tip-calculator");

// Select bill input
const billAmountInput = form.elements.bill;

// Select tip input
const tipPercentageInput = form.elements.tipPercentage;
let tipPercentageAmount = Number(tipPercentageInput.value);

// Select text to display percentage
const tipPercentageDisplay = document.querySelector("#tipPercentageDisplay");
tipPercentageDisplay.textContent = tipPercentageAmount;

// select text to display total tip amount
const totalTipAmount = document.querySelector("#total-tip-amount");

tipPercentageInput.addEventListener("input", function() {
  tipPercentageAmount = tipPercentageInput.value;
  tipPercentageDisplay.textContent = tipPercentageAmount;

  if (billAmountInput.value && tipPercentageInput.value) {
    const totalTip = calculateTotalTip();
    totalTipAmount.textContent = totalTip.toFixed(2);
  } else {
    totalTipAmount.textContent = 0.0;
  }
});

billAmountInput.addEventListener("input", function() {
  // if (billAmountInput.value && tipPercentageInput.value) {
  //   const totalTip = calculateTotalTip();
  //   totalTipAmount.textContent = totalTip.toFixed(2);
  // } else {
  //   totalTipAmount.textContent = 0.0;
  // }

  const totalTip = calculateTotalTip();
  console.log(totalTip);
  totalTipAmount.textContent = totalTip.toFixed(2);
});

function calculateTotalTip() {
  const billAmount = billAmountInput.value;
  const tipPercentage = Number(tipPercentageInput.value);
  const totalTip = Math.round(billAmount * (tipPercentage / 100) * 100) / 100;
  return totalTip;
}
