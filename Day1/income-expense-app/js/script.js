const incomes = [
  {
    title: "Eating",
    amount: 100
  },
  {
    title: "Computer",
    amount: 350
  }
];

const form = document.querySelector("#add-income");
const incomeDataTable = document.querySelector("#income-data");
const incomeAmountDisplay = document.querySelector("#income-amount");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const incomeTitle = e.target.elements.incomeTitle;
  const incomeAmount = e.target.elements.incomeAmount;

  incomes.push({
    title: incomeTitle.value,
    amount: Number(incomeAmount.value)
  });

  renderIncomes(incomes);

  incomeTitle.textContent = "";
  incomeAmount.textContent = "";
});

// Initial Rendering of incomes
renderIncomes(incomes);

function renderIncomes(incomes) {
  incomeDataTable.innerHTML = "";
  let incomeTotal = 0;
  incomes.forEach(income => {
    const tableRow = document.createElement("tr");
    const titleData = document.createElement("td");
    const amountData = document.createElement("td");

    titleData.textContent = income.title;
    amountData.textContent = income.amount;
    tableRow.appendChild(titleData);
    tableRow.appendChild(amountData);

    incomeDataTable.appendChild(tableRow);

    incomeTotal += income.amount;
  });

  incomeAmountDisplay.textContent = incomeTotal;
}
