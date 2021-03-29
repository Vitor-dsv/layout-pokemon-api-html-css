$(() => {
    let pokemon = localStorage.getItem("pokemon");

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    var life, experience, weight, img, height;

    $.ajax(url, {
        type: 'GET',
        success: function (data) {
            life = data.stats[0].base_stat;
            experience = data.base_experience;
            weight = data.weight;
            img = data.sprites.other.dream_world.front_default;
            height = data.height.toString() + '0';
        },
        complete: function () {
            $('.app').html(`
            <div class="row justify-content-md-center">
                <div class="card card-pokemon">
                    <img src="${img}"
                        alt="pokemon">
                    <div class="card-body">
                        <h5 class="card-title center title-card">${pokemon}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item group-hability">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                    class="bi bi-heart" viewBox="0 0 16 16">
                                    <path
                                        d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg> ${life}
                            </li>
                            <li class="list-group-item group-hability group-hability"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-ladder" viewBox="0 0 16 16">
                            <path d="M4.5 1a.5.5 0 0 1 .5.5V2h6v-.5a.5.5 0 0 1 1 0v14a.5.5 0 0 1-1 0V15H5v.5a.5.5 0 0 1-1 0v-14a.5.5 0 0 1 .5-.5zM5 14h6v-2H5v2zm0-3h6V9H5v2zm0-3h6V6H5v2zm0-3h6V3H5v2z"/>
                          </svg> ${height} CM</li>
                            <li class="list-group-item group-hability"><svg xmlns="http://www.w3.org/2000/svg" width="22"
                                    height="22" fill="currentColor" class="bi bi-lightning-charge" viewBox="0 0 16 16">
                                    <path
                                        d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
                                </svg> ${experience} </li>
                                <li class="list-group-item group-hability group-hability"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                    class="bi bi-bar-chart" viewBox="0 0 16 16">
                                    <path
                                        d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
                                </svg> ${weight} LBS</li>
                        </ul>
                    </div>
                </div>
            </div>`);
        }
    });
});