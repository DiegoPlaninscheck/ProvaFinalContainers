const lista = [
    { username: "Diego", password: "123" },
    { username: "Thiago", password: "321" },
    { username: "João", password: "456" },
]

function buscarPessoas() {
    return lista;
}

function cadastrarPessoa(dados) {
    const user = lista.filter((user) => user.username == dados.username && user.password == dados.password)
    if (user == "" || user == []) {
        lista.push(dados);
        return dados;
    }
    return { message: "Erro ao tentar realizar o cadastro!" }
}

function login(dados) {
    const user = lista.filter((user) => user.username == dados.username && user.password == dados.password)
    console.log(user);
    if (user.length != 0) {
        return dados;
    }
    return { message: "Erro ao realizar login!" }
}

module.exports = { buscarPessoas, cadastrarPessoa, login }