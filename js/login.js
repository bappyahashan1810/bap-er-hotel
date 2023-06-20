document.getElementById('btn-submit').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    if (email === 'bap@beta.com' && password === 'baperhotel') {
        location.href = 'bank.html';
    }
    else {
        alert('Wrong Password, Input Your Correct Password');
    }
    userEmail.value = '';
    userPassword.value = '';
})