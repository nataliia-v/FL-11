const email = prompt('input your email');
const minLengthEmail = 6;
const minLengthPassword = 5;

let users = [
    {
        email: 'user@gmail.com',
        password: 'UserPass'
    },
    {
        email: 'admin@gmail.com',
        password: 'AdminPass'
    }
];

const user = users.find(user => email === user.email);

if (!email) {
    alert('Canceled.')

} else if (email.length < minLengthEmail) {
    alert('I don\'t know any emails having name length less than 6 symbols')

} else if (user) {

    const password = prompt('input your password');

    if (!password) {
        alert('Canceled.');
    } else if (password === user.password) {
        let changePass = confirm('Do you want to change your password?');

        if (changePass) {
            let oldPass = prompt('write the old password');
            if (!oldPass) {
                alert('Canceled.')
            }
            if (oldPass === user.password) {

                let newPass = prompt('input your new password');
                if (!newPass) {
                    alert('Canceled.');
                } else if (newPass.length < minLengthPassword) {
                    alert('It’s too short password. Sorry')
                } else {
                    let newPassConfirm = prompt('input your new password again');
                    if (!newPassConfirm) {
                        alert('Canceled.')
                    } else if (newPassConfirm === newPass) {
                        alert('You have successfully changed your password')
                    } else {
                        alert('You wrote the wrong password')
                    }
                }
            } else {
                alert('Wrong password');
            }
        } else {
            alert('You have failed the change');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you')
}