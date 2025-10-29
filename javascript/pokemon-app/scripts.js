async function getPokemonInfo() {
    let pokemonName = document.getElementById("pokemon-choice").value;
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
        let data = await response.json();

        let id = data['id']

        let output = document.getElementById("pokemon-info");
        output.innerText = `${pokemonName}: ${id}`;
    } catch (error) {
        alert("Pokémon does not exist.");
    }
}

let button = document.getElementById("submit")
button.addEventListener("click", getPokemonInfo)