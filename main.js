process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

async function fnConsultarPoke() {
    // const id = '25'
    const id = '25'
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    const evo = '0'

    if (pokemon.status == 200) {
        const nome = await pokemon.json()
        const tipos = await nome.types.map(a => a.type.name)
        console.log(`id: ${nome.id}`)
        console.log(`Nome: ${nome.name}`)
        console.log(`Tipo: ${tipos}`)
        const evo = id+1

        console.log(evo)
        const evolucao = await fetch(`https://pokeapi.co/api/v2/pokemon/${evo}/`)
        const data = await evolucao.json()
        console.log(`Evolução: ${data.name}`)


    }

    if (pokemon.status != 200) {
        console.log(`================`)
        console.log(`ENDEREÇO INCORRETO`)
        console.log(`================`)
    }
}

fnConsultarPoke()
