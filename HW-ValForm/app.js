const phone1 = document.getElementById('phone1');
const phone2 = document.getElementById('phone2');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const register = document.getElementById('register');
const email = document.getElementById('email');

register.addEventListener('click', (e) => {
    e.preventDefault();
    if (checkPhoneFormat(phone1.value) &&
        checkPhoneFormat(phone2.value) &&
        validationEmail(email.value) &&
        checkPassword(password.value, password2.value)) {

        console.log('Valid');
    } else
        console.log('Valid');
});

function checkPhoneFormat(phone) {
    const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;
    //"123-456-7890";

    if (!phoneNumberRegex.test(phone)) {
        alert('Invalid Number');
        return false;
    }
    return true;
}

function validationEmail(email) {
    const pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
    if (!email.match(pattern)) {
        alert('wrong email');
        return false;
    }
    return true;
}

function checkPassword(password, password2) {

    if (password !== password2) {
        alert('wrong password');
        return false;
    }
    return true;
}

phone1.addEventListener('change', () => {
    const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneNumberRegex.test(phone1.value)) {
        alert('Invalid Number');

        phone1.value = "";
    }
})