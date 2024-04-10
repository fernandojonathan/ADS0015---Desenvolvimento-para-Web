const formsCadastro = document.querySelector('.forms')
const errorElement = document.getElementById('error-message');
const inputPassword = document.querySelector('#password')
const inputemail = document.querySelector('#Email')
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
formsCadastro.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    const inputEmail = inputemail.value
    const inputpassword = inputPassword.value
    if (!validarEmail(inputEmail)) {
        let errorMessage = "Endereço de e-mail inválido."
        errorElement.textContent = errorMessage;
        return 0;

    }
    const data = {
        email:inputEmail,
        password:inputpassword
    }
    errorElement.textContent = '';
    console.log(data)
    

})
