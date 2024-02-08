document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = form.elements['email'].value;
        const confirmEmail = form.elements['confirmemail'].value;
        const phone = form.elements['phone'].value;
        const password = form.elements['password'].value;
        const confirmPassword = form.elements['confirmepassword'].value;
        const celphone = form.elements['celphone'].value;
        const firstName = form.elements['firstname'].value;
        const lastName = form.elements['lastname'].value;
        const idDocument = form.elements['iddocument'].value;
        const cep = form.elements['cep'].value;
        const numberAddress = form.elements['numberaddress'].value;
        const city = form.elements['city'].value;
        const uf = form.elements['uf'].value;
        const address = form.elements['address'].value;
        const district = form.elements['district'].value;
        const gender = form.elements['gender'].value;
        const permission = form.elements['permission'].checked ? 'Sim' : 'Não';

        const result ="Seja bem vindo $firstname \n Cadastro efetuado com sucesso!";
        alert(result);
    });
});
