// handle deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {

    //update deposit
    const depositInput = document.getElementById('deposit-input');
    const newdepositAmount = depositInput.value;
    const deposit = document.getElementById('deposit-total');
    previousDepositAmount = deposit.innerText;
    deposit.innerText = parseFloat(newdepositAmount) + parseFloat(previousDepositAmount);

    //clear input button
    depositInput.value = '';

    //update balance
    const previousBalance = document.getElementById('balance-total');
    const balance = previousBalance.innerText;
    previousBalance.innerText = parseFloat(balance) + parseFloat(newdepositAmount);

});

//handle withdraw button

document.getElementById('btn-withdraw').addEventListener('click', function () {
    //withdraw update
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = withdrawInput.value;
    const previousWithdraw = document.getElementById('withdraw-total');
    const previousWithdrawAmount = previousWithdraw.innerText;
    previousWithdraw.innerText = parseFloat(newWithdrawAmount) + parseFloat(previousWithdrawAmount);
    withdrawInput.value = '';
    //update balance
    const previousBalance = document.getElementById('balance-total');
    const balance = previousBalance.innerText;
    previousBalance.innerText = parseFloat(balance) - parseFloat(newWithdrawAmount);

});


