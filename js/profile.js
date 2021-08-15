//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){

    //get the amount deposited
    const depositInput = document.getElementById('deposit-fild');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    //update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositTotal = previousDepositAmount + newDepositAmount; 
    depositTotal.innerText = newDepositTotal;
    //update blance after deposit
    const balnceTotal = document.getElementById('balace-total');
    const balaceTotalText = balnceTotal.innerText;
    const previousBalanceTotal = parseFloat(balaceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balnceTotal.innerText = newBalanceTotal;
    //clear the input fild
    depositInput.value = '';
});

//handle withdraw handler
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-fild');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    //set balance after withdraw
    const balanceTotal = document.getElementById('balace-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    //clear the withdraw fild
    withdrawInput.value = '';
})