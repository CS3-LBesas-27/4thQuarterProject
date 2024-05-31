var pass = document.getElementById("pass");
var confirm_password = document.getElementById("cpass");

function validatePassword() {
    if (pass.value !== confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity('');
    }
}

pass.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

function store() {
    var name = document.getElementById("UserName");
    localStorage.setItem('name', name.value);
    localStorage.setItem('pass', pass.value);
}

function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pass');

    var userName = document.getElementById('UserName');
    var userPw = document.getElementById('pass');

    if (userName.value !== storedName || userPw.value !== storedPw) {
        alert('ERROR');
    } else {
        alert('You are logged in.');
    }
}