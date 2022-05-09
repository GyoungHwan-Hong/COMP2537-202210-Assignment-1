
type_g

function processPokemonResp(data) {
    for (i=0; i < data.types.length; i++)
        if(data.types == type_g)
            $("main").html(data.id)
}


function display(type_){
    type_g = type_

    for (i = 1 ; i < 100; i++) {
        $.ajax({
            type: "get",
            url: `https://pokeapi.co/api/v2/pokemon/${i}`,
            success: processPokemonResp
        })
    }

}


function setup() {

    diplay(poke_type = $("#poke_type option:selected").val())
    // display all the grass type pokemon
    $("#poke_type").change(() => {
        poke_type = $("#poke_type option:selected").val();
        alert(poke_type)
    })
}

$(document).ready(setup)
