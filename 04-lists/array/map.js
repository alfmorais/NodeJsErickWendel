const service = require("../service.js")

Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = []

    for (let index = 0; index <= this.length - 1; index++) {
        const resultado = callback(this[index], index)
        novoArrayMapeado.push(resultado)
    }
    return novoArrayMapeado
}


async function main() {
    try {
        const result = await service.obterPessoas("a")

        // const names = result.results.map(function (person) {
        //     return person.name
        // });

        // const names = result.results.map((person) => person.name)
        const names = result.results.meuMap(function (person, index) {
            return person.name
        })

        console.log("Names: ", names)
    } catch (error) {
        console.error(error)
    }
}

main()