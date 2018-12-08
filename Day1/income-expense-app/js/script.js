const incomes = getSavedIncomes();
const expenses = getSavedIncomes();

const accountBalance = document.querySelector("#account-balance");

function getSavedIncomes() {
  const incomesJSON = localStorage.getItem("incomes");

  if (incomesJSON !== null) {
    return JSON.parse(incomesJSON);
  } else {
    return [];
  }
}

function getSavedIncomes() {
  const expensesJSON = localStorage.getItem("expenses");

  if (expensesJSON !== null) {
    return JSON.parse(expensesJSON);
  } else {
    return [];
  }
}

const incomeForm = document.querySelector("#add-income");
const incomeDataTable = document.querySelector("#income-data");
const incomeAmountDisplay = document.querySelector("#income-amount");

incomeForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const incomeTitle = e.target.elements.incomeTitle;
  const incomeAmount = e.target.elements.incomeAmount;

  incomes.push({
    title: incomeTitle.value,
    amount: Number(incomeAmount.value)
  });

  localStorage.setItem("incomes", JSON.stringify(incomes));

  renderIncomes(incomes);

  incomeTitle.value.textContent = "";
  incomeAmount.value.textContent = "";
});

// Initial Rendering of incomes
renderIncomes(incomes);

function renderIncomes(incomes) {
  incomeDataTable.innerHTML = "";
  incomes.forEach(income => {
    const tableRow = document.createElement("tr");
    const titleData = document.createElement("td");
    const amountData = document.createElement("td");

    titleData.textContent = income.title;
    amountData.textContent = income.amount;
    tableRow.appendChild(titleData);
    tableRow.appendChild(amountData);

    incomeDataTable.appendChild(tableRow);
  });
  accountBalance.textContent =
    calculateTotalIncome(incomes) - calculateTotalExpenses(expenses);
  incomeAmountDisplay.textContent = calculateTotalIncome(incomes);
}

function calculateTotalIncome(incomes) {
  const total = incomes.reduce((accumulator, income) => {
    return accumulator + income.amount;
  }, 0);

  return total;
}

const expensesDataTable = document.querySelector("#expenses-data");
const expensesForm = document.querySelector("#add-expense");
const expensesAmountDisplay = document.querySelector("#expense-amount");

expensesForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const expenseTitle = e.target.elements.expenseTitle;
  const expenseAmount = e.target.elements.expenseAmount;

  expenses.push({
    title: expenseTitle.value,
    amount: Number(expenseAmount.value)
  });

  localStorage.setItem("expenses", JSON.stringify(expenses));

  renderExpenses(expenses);

  expenseTitle.value.textContent = "";
  expenseAmount.value.textContent = "";
});

// Initial Rendering of expenses
renderExpenses(expenses);

function renderExpenses(expenses) {
  expensesDataTable.innerHTML = "";
  expenses.forEach(expense => {
    const tableRow = document.createElement("tr");
    const titleData = document.createElement("td");
    const amountData = document.createElement("td");

    titleData.textContent = expense.title;
    amountData.textContent = expense.amount;
    tableRow.appendChild(titleData);
    tableRow.appendChild(amountData);

    expensesDataTable.appendChild(tableRow);
  });

  expensesAmountDisplay.textContent = calculateTotalIncome(expenses);
  accountBalance.textContent =
    calculateTotalIncome(incomes) - calculateTotalExpenses(expenses);

  console.log("Incomes", calculateTotalIncome(incomes));
  console.log("Expenses", calculateTotalExpenses(expenses));
}

function calculateTotalExpenses(expenses) {
  const total = expenses.reduce((accumulator, expenses) => {
    return accumulator + expenses.amount;
  }, 0);

  return total;
}
