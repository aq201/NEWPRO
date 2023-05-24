// Define variables
let budgetAmount = 0;
let totalExpenses = 0;
const budgetAmountElement = document.getElementById('budgetAmount');
const totalExpensesElement = document.getElementById('totalExpenses');
const expenseNameInput = document.getElementById('expenseName');
const expenseAmountInput = document.getElementById('expenseAmount');
const addExpenseBtn = document.getElementById('addExpenseBtn');
const expenseListElement = document.getElementById('expenseList');

// Add event listener to the "Add Expense" button
addExpenseBtn.addEventListener('click', function() {
    const expenseName = expenseNameInput.value;
    const expenseAmount = parseFloat(expenseAmountInput.value);

    // Validate inputs
    if (expenseName === '' || isNaN(expenseAmount)) {
        alert('Please enter a valid expense name and amount.');
        return;
    }

    // Create expense item
    const expenseItem = document.createElement('div');
    expenseItem.classList.add('expense-item');
    expenseItem.innerHTML = `
        <span>${expenseName}: $${expenseAmount}</span>
    `;

    // Add expense item to the expense list
    expenseListElement.appendChild(expenseItem);

    // Update total expenses
    totalExpenses += expenseAmount;
    totalExpensesElement.textContent = totalExpenses.toFixed(2);

    // Clear input fields
    expenseNameInput.value = '';
    expenseAmountInput.value = '';

    // Calculate remaining budget
    const remainingBudget = budgetAmount - totalExpenses;
    budgetAmountElement.textContent = remainingBudget.toFixed(2);
});

// Prompt
