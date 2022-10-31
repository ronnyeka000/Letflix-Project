let toogleState = false;

let nav_toogle = function() {
    let element = document.getElementById('navmenu')
    if (toogleState == false) {
        element.style.display = 'flex';
        toogleState = true;
    } else {
        element.style.display = 'none';
        toogleState = false;
    }
}

let validasi = () => {
    let firstname = document.getElementById('firstname')
    let lastname = document.getElementById('lastname')
    let phone = document.getElementById('phone')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let male = document.getElementById('male')
    let female = document.getElementById('female')
    let agree = document.getElementById('agree')
    let errorMsg = []


    Validasifirstname(firstname, errorMsg)
    Validasilastname(lastname, errorMsg)
    Validasiphone(phone, errorMsg)
    Validasipassword(password, errorMsg)
    Validasiemail(email, errorMsg)
    Validasigender(male, female, errorMsg)
    Validasiagree(agree, errorMsg)

    if (errorMsg.length === 0) {
        alert('Resgristation Success')
    } else {
        alert(errorMsg.join('\n'))
    }
}

let Validasifirstname = (firstname, errorMsg) => {
    if (firstname.value === '') {
        errorMsg.push('Firstname Required')
    } else if (firstname.value.length < 3) {
        errorMsg.push('Firstname Min Length 3')
    }
}

let Validasilastname = (lastname, errorMsg) => {
    if (lastname.value === '') {
        errorMsg.push('Lastname Required')
    } else if (lastname.value.length < 3) {
        errorMsg.push('Lastname Min Length 3')
    }
}

let Validasiphone = (phone, errorMsg) => {
    if (phone.value === '') {
        errorMsg.push('Phone Required')
    }
}

let Validasiemail = (email, errorMsg) => {
    if (email.value === '') {
        errorMsg.push('Email Required')
    } else if (email.value.startsWith('.') || email.value.startsWith('@')) {
        errorMsg.push('Email cannot starts with . or @')
    } else if (email.value.indexOf('.') === (email.value.indexOf('@')) + 1) {
        errorMsg.push('Email cannot contain . after @')
    } else if (!email.value.endWith('@gmail.com')) {
        errorMsg.push('Email must ends with @gmail.com')
    }
}

let Validasipassword = (password, errorMsg) => {
    if (password.value === '') {
        errorMsg.push('Password Required')
    } else if (password.value.length < 8) {
        errorMsg.push('Password Min Length 8')
    }
}

let Validasigender = (male, female, errorMsg) => {
    if (!male.checked && !female.checked) {
        errorMsg.push('Gender Required')
    }
}

let Validasiagree = (agree, errorMsg) => {
    if (!agree.checked) {
        errorMsg.push('You must Agree to Terms & Conditions')
    }
}