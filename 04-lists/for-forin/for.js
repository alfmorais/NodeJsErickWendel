const service = require("../service.js")

async function main() {
    try {
        const result = await service.obterPessoas("a")
        const names = []

        console.time("for")

        for (let index = 0; index <= result.results.length - 1; index++) {
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