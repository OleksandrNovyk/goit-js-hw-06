// const formLogin = document.querySelector('.login-form');

// formLogin.addEventListener('submit', event => {
//   event.preventDefault();
//   const formData = {};
//   for (const element of formLogin.elements) {
//     if (element.name) {
//       formData[element.name] = element.value;
//     }
//   }
//   if (formData.email && formData.password) {
//     console.log(formData);
//     formLogin.reset();
//   } else {
//     alert ('Всі поля повинні бути заповнені!!!');
//   }
// });


// const form = document.querySelector(".login-form");

// form.addEventListener ("submit", event => {
//   event.preventDefault();
//   const {
//     elements: { username, password }
//   } = event.currentTarget

//     if (email.value === '' || password.value === '') {
//         return alert('Всі поля повинні бути заповнені!!!')
//     }
//     const userDetails = { email: email.value, Password: password.value }
//     console.log(userDetails)
//     event.currentTarget.reset()
//   };


//   const formLogin = document.querySelector('.login-form');


const form = document.querySelector('.login-form')
form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const {
    elements: { email, password },
    } = event.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('Всі поля повинні бути заповнені!!!')
    }
    const userDetails = { email: email.value, Password: password.value }
    
    console.log(userDetails)
    event.currentTarget.reset()
}