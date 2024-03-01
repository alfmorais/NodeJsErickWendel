const service = require("../service.js")

async function main() {
    try {
        const result = await service.obterPessoas("a")
        const names = []

        console.time("for")

        for (person of result.results) {
            names.push(person.name)
        }

        console.timeEnd("for")
        console.log("names: ", names)
    } catch (error) {
        console.error(error)
    }
}

main()