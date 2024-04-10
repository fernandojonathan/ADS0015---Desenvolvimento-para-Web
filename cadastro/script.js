const inputCPF = document.querySelector('#CPF')
const errorElement = document.getElementById('error-message');

inputCPF.addEventListener('keypress',()=>{
    let inputValue = inputCPF.value;
    let sanitizedValue = '';
    
    // Remove caracteres não numéricos
    for (let i = 0; i < inputValue.length; i++) {
        if (!isNaN(inputValue[i]) && inputValue[i] !== ' ') {
            sanitizedValue += inputValue[i];
            errorElement.textContent = '';
        }else {

              let errorMessage = "Campos CPF so aceita numeros"
            errorElement.textContent = errorMessage;
            
        }
    }
    
        
    // Formatação do CPF (adiciona pontos e traço)
   

   
})
function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF==="00000000000" ||
    strCPF ==="11111111111" ||
    strCPF==="22222222222" || strCPF ==="33333333333" ||
    strCPF=== "44444444444" || strCPF==="55555555555" ||
    strCPF ==="66666666666" || strCPF==="77777777777" ||
    strCPF==="88888888888" || strCPF ==="99999999999" ||
    (strCPF.length != 11))
    return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;

    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}
const inputtel = document.getElementById('Telefone') // Seletor do campo de telefone

inputtel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) // Dispara quando digitado no campo
inputtel.addEventListener('change', (e) => mascaraTelefone(e.target.value)) // Dispara quando autocompletado o campo

const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    inputtel.value = valor // Insere o(s) valor(es) no campo
}

const formsCadastro = document.querySelector('.forms')

const inputPassword = document.querySelector('#password')
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

formsCadastro.addEventListener('submit', (event)=>{
    
    event.preventDefault();
    const inputcpf = inputCPF.value
    const inputemail = document.querySelector('#Email').value
    const inputtelefone= inputtel.value
    const inputpassword = inputPassword.value
    if (!validarEmail(inputemail)) {
        let errorMessage = "Endereço de e-mail inválido."
        errorElement.textContent = errorMessage;
        return 0;

    }
    if (!TestaCPF(inputcpf) ) {
        let errorMessage = 'CPF inválido.';
        
        errorElement.textContent = errorMessage;
        return 0;
    }
        errorElement.textContent = ' '
    const data = {
        cpf: inputcpf,
        email:inputemail,
        telefone:inputtelefone,
        password:inputpassword
    }
    console.log(data)
    
    

})
