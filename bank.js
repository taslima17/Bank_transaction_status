
document.getElementById('submit').addEventListener('click', function () {

    const useremail = document.getElementById('email');
    const emailvalue = useremail.value;
    console.log(emailvalue);
    const userpass = document.getElementById('password');
    const passvalue = userpass.value;
    console.log(passvalue);
    if (emailvalue == 'ta@gmail.com' && passvalue == 'taslima') {
        console.log("yes");
        window.location.href = 'banking.html';
    }
    else {
        console.log("not valid");
    }
})
