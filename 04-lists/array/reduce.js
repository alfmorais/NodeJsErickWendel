const service = require("../service.js")

async function main() {
    try {
        const result = await service.obterPessoas("a")
    } catch (error) {
        console.error(error)
    }
}

main()