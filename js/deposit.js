document.getElementById('btn-deposit').addEventListener('click', function () {
    const userDeposit = document.getElementById('user-deposit');
    const newDepositAmountString = userDeposit.value;
    const newDepositAmount = parseFloat(newDepositAmountString);




    const currentDepositElement = document.getElementById('total-deposit');
    const perviousDepositString = currentDepositElement.innerText;
    const perviousDeposite = parseFloat(perviousDepositString);
    currentDepositElement.innerText = newDepositAmount + perviousDeposite;


    const totalBlance = document.getElementById('total-blance');
    const perviousBlanceString = totalBlance.innerText;
    const perviousBlance = parseFloat(perviousBlanceString);
    totalBlance.innerText = perviousBlance + newDepositAmount;


    userDeposit.value = '';
})