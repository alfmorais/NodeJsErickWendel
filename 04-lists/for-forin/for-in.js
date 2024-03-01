const service = require("../service.js")

async function main() {
    try {
        const result = await service.obterPessoas("a")
        const names = []

        console.time("for")

        for (let index in result.results) {
            const person = result.results[index]
            names.push(person.name)
        }

        console.timeEnd("for")
        console.log("names: ", names)
    } catch (error) {
        console.error(error)
    }
}

main()