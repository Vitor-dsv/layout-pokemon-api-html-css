const API_URL = 'https://pokeapi.co/api/v2'

$(() => {
    localStorage.clear()
    const pokemonList = $('.pokemon-list')

    const renderPokemon = (pokemon) => {
        const formattedName = (pokemon.name).charAt(0).toUpperCase() + (pokemon.name).slice(1)
        pokemonList.append(`
        <div class="poke-card" onclick="redirect('${formattedName}')">
        <p>${formattedName}</p>
        <img src="${pokemon.sprites.front_default}" />
        </div>
        `)
    }

    const fetchApi = (resource, callback) => {
        $.ajax(`${API_URL}/${resource}`, {
            type: 'GET',
            success: callback,
            error: alert
        })
    }


    fetchApi('pokemon?limit=49', async res => {
        res.results.map(pokemon => {
            fetchApi(`pokemon/${pokemon.name}`, renderPokemon)
        })
    })

    const searchButton = document.querySelector('#search-button')

    searchButton.onclick = () => {
        const pokemon = document.querySelector('#pokemon-name').value
    }
})

const redirect = (namePokemon) => {
    localStorage.setItem('pokemon', namePokemon.toLowerCase());

    window.location.href = '../layout-specific/index.html';
}