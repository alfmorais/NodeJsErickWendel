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

const usuarioPromise = obterUsuario()
// Para manipular o sucesso usamos a função .then
// Para manipular erros usamos a função .catch
// Usuario -> telefone -> telefone
usuarioPromise
    .then(function (usuario) {
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result) {
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id,
                    },
                    telefone: result,
                }
            })
    })
    .then(function (resultado) {
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result) {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result,
            }
        })
    })
    .then(function (resultado) {
        console.log(`
            Nome: ${resultado.usuario.nome}
            Endereço: ${resultado.endereco.rua}, Nº: ${resultado.endereco.numero}
            Nome: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
        `)
    })
    .catch (function (error) {
    console.error("Deu ruim: ", error)
})
