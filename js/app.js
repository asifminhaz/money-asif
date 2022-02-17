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

    const totalExpenses = document.getElementById('total-expenses');

    totalExpenses.innerText = totalFoodAmount + totalRentAmount + totalClothesAmount;
    console.log('totalexpenses')
    // total balance
    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = totalIncomeAmount - totalExpenses;
    console.log('totalblance');
})