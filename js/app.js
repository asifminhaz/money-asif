
document.getElementById('calculate-amount').addEventListener('click', function () {

    const incomeAmount = document.getElementById('income-amount').value;
    const totalIncomeAmount = parseInt(incomeAmount);

    // console.log('incomeamount');
    // food amount 
    const foodAmount = document.getElementById('food-amount').value;
    const totalFoodAmount = parseInt(foodAmount);
    // rent amount 
    const rentAmount = document.getElementById('rent-amount').value;
    const totalRentAmount = parseInt(rentAmount);
    // clothes amount 
    const clothesAmount = document.getElementById('clothes-amount').value;
    const totalClothesAmount = parseInt(clothesAmount);

    const totalExpenses = totalFoodAmount + totalRentAmount + totalClothesAmount;

    const totalExpensesText = document.getElementById('total-expenses')

    totalExpensesText.innerText = totalExpenses

    // total balance
    const currentBalance = totalIncomeAmount - totalExpenses

    const currentBalanceText = document.getElementById('total-balance')

    currentBalanceText.innerText = currentBalance;

    // saving amount 
    document.getElementById('save-amount').addEventListener('click', function () {
        const saveInput = document.getElementById('save-input').value
        const totalSavingAmount = currentBalance / saveInput;
        const finalSavingAmount = parseInt(totalSavingAmount);
        // console.log('yey', totalSavingAmount);
        const savingAmount = document.getElementById('saving-balance');
        savingAmount.innerText = totalSavingAmount;
        // console.log('yey', savingAmount);
        // remaining balance 
        const remainingBalance = currentBalance - finalSavingAmount;
        const remainingAmount = document.getElementById('remaining-balance');
        remainingAmount.innerText = remainingBalance;
        console.log('yey', remainingBalance);



    })
})

