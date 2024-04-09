const inputCPF = document.querySelector('#CPF')

inputCPF.addEventListener('keypress',()=>{
    let inputValue = inputCPF.value;
    let sanitizedValue = '';
    let errorMessage = '';
    // Remove caracteres não numéricos
    for (let i = 0; i < inputValue.length; i++) {
        if (!isNaN(inputValue[i]) && inputValue[i] !== ' ' && inputValue[i] !== '.' && inputValue[i] !== '-') {
            sanitizedValue += inputValue[i];
            
        }else {
            if(inputValue[i] === '.' || inputValue[i] === '-'){
                continue;
            }else{

                errorMessage = 'Somente números são permitidos.';
            }
        }
    }

    // Formatação do CPF (adiciona pontos e traço)
    let formattedCPF = '';
    for (let i = 0; i < sanitizedValue.length; i++) {
        if (i === 3 || i === 6) {
            formattedCPF += '.';
        } else if (i === 9) {
            formattedCPF += '-';
        }
        formattedCPF += sanitizedValue[i];
    }
    const errorElement = document.getElementById('error-message');
    errorElement.textContent = errorMessage;

    inputCPF.value = formattedCPF
})

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


formsCadastro.addEventListener('submit', (event)=>{
    event.preventDefault();
    const inputcpf = inputCPF.value
    const inputemail = document.querySelector('#Email').value
    const inputtelefone= inputtel.value
    const inputpassword = inputPassword.value
    const data = {
        cpf: inputcpf,
        email:inputemail,
        telefone:inputtelefone,
        password:inputpassword
    }
    console.log(data)
    

})
