export default class User {
    constructor(firstName, surname, email, password, dateOfBirth, image = '../img/user.png', gender, des) {
        this.userName = firstName;
        this.secondName = surname;
        this.email = email;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.image = image;
        this.login = false;
        this.des = des
    }


    getGender(gender) {
        for (let i = 0; i < gender.length; i++) {
            if (gender[i].checked) {
                this.gender = gender[i].value
            }
        }
    }

    chckLOgin() {
        if (this.login === true) {
            console.log('done');
        }
    }
}
