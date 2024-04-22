const contaAdvogado = {
    id: "11",
    cod_auth: 1,
    nome: "nome do advogado",
    matricula: "matricula do advogado",
    cargo: "cargo do advogado",
    password: "123456"
}


export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(contaAdvogado)
    }, 5000)
})