
to_add = ''

function loadNineImages() {

    for (i = 1; i <= 9; i++) { //Nine times loop
        if (i % 3 == 1) { //only when i = 1, 4, 7
            to_add += ` <div class = "body_outer_box">`
        }


        // 1. generate random numbers
        // 2. init a AJAX request to pokeapi.co
        // 3. process the reponse extract the img
        to_add += ` <div class = "images_group_box">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/<%= id %>.png">
        </div>`

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