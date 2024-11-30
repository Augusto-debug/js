const users = [
    {username: 'leo', password: 1234},
    {username: 'maria', password: 45445},
]

let txtUser = document.getElementById("txtUser");
let txtPwd = document.getElementById('txtPwd');
let btnCadastrar = document.getElementById('btnCadastrar');

btnCadastrar.addEventListener('click', () => {
    let newUser = {username: txtUser.value, password:txtPwd.value}
    let users = localStorage.getItem('users');

    if(!users) {
        localStorage.setItem('users', JSON.stringify([newUser]))
    } else{
        users = JSON.parse(users);
        if (!validate(users, newUser)) {
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users))
        }        
    }
});
const validate = (vet, user) => {
    for (let i = 0; i < vet.length; i++) {
        if (vet[i].username === user.username) {
            alert('Usuário já existe, favor cadastrar um novo usuário')
            return true;
        }
    }
    alert('Usuário cadastrado com sucesso.')
    return false;
}   