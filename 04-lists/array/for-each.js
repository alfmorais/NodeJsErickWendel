const service = require("../service.js")

async function main() {
    try {
        const result = await service.obterPessoas("a")
        const names = []

        result.results.forEach(function (person) {
            names.push(person.name)
        });
        console.log("Names: ", names)
    } catch (error) {
        console.error(error)
    }
}

main()