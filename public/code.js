
to_add = ''


function processPokeResp(data) {
    to_add += ` ${data.name} 
    <div class = "images_group_box">
    <a href="/profile/${data.id}">
    <img src="${data.sprites.other["official-artwork"].front_default}">
    </div>`
}

async function loadNineImages() {

    for (i = 1; i <= 9; i++) { //Nine times loop
        if (i % 3 == 1) { //only when i = 1, 4, 7
            to_add += ` <div class = "body_outer_box">`
        }


        // 1. generate random numbers
        // 2. init a AJAX request to pokeapi.co
        // 3. process the reponse extract the img

        x = Math.floor(Math.random() * 100) + 1

        await $.ajax({
            type: "GET", 
            url: `https://pokeapi.co/api/v2/pokemon/${x}/`,
            success: processPokeResp
        })

        // to_add += ` <div class = "images_group_box">
        // <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${x}.png">
        // </div>`

        if (i % 3 == 0) { // only when i = 3, 6, 9
            to_add += ` </div>`
        }

        // to be done

    }

    $("main").html(to_add)
}


function setup() {
    loadNineImages();
    // events handlers

}

$(document).ready(setup)