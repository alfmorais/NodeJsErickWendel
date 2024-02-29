/*
0 - Obter um usuario
1 - Obter o numero de telefone de um usuario a partir de seu ID
2 - Obter o endereço do usuario pelo ID
*/
// importamos um módulo interno do node.js
const util = require("util")
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
    // Quando der algum problema -> reject(error)
    // Quando sucesso -> resolve
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            return resolve({
                id: 1,
                nome: "Aladin",
                dataNascimento: new Date(),
            })
        }, 1000)
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: "1199002",
                ddd: 11
            })
        }, 2000)
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: "Rua dos bobos",
            numero: 0,
        })
    }, 2000)
}

// 1° passo adicionar a palavra async -> automaticamente ela retornará uma Promise
async function main() {
    try {
        console.time("medida-promise")
        const usuario = await obterUsuario()
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id),
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]

        console.log(`
            Nome: ${usuario.nome},
            Telefone: (${telefone.ddd}) ${telefone.telefone},
            Endereço: ${endereco.rua}, Nº ${endereco.numero}, 
        `)
        console.timeEnd("medida-promise")
    } catch (error) {
        console.error("Erro: ", error)
    }
}

main()