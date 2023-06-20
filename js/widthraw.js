document.getElementById('btn-Withdraw').addEventListener('click', function () {
    const userWithdraw = document.getElementById('user-withdraw');
    const newWithdrawAmountString = userWithdraw.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    userWithdraw.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please Provide Correct Number');
        return;
    }

    const totalWithdraw = document.getElementById('total-withdraw');
    const previousWithdrawAmountString = totalWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);


    const totalBlance = document.getElementById('total-blance');
    const previoustotalBlanceString = totalBlance.innerText;
    const previoustotalBlance = parseFloat(previoustotalBlanceString);


    if (newWithdrawAmount > previoustotalBlance) {
        alert('You must withdraw less then Your Account Balance ');
        return;
    }

    totalWithdraw.innerText = newWithdrawAmount + previousWithdrawAmount;
    totalBlance.innerText = previoustotalBlance - newWithdrawAmount;



})