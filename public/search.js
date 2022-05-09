
type_g = ""

function processPokemonResp(data) {

    for (i=0; i < data.types.length; i++)      //for (x in data.types)
        if(data.types[i].type.name == type_g)
            $("main").append("<p>" + data.id + "</p>")
}


function display(type_){

    type_g = type_

    $("main").empty();

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

    display($("#poke_type option:selected").val())
    // display all the grass type pokemon
    $("#poke_type").change(() => {
        poke_type = $("#poke_type option:selected").val();
        display($("#poke_type option:selected").val())
    })
}

$(document).ready(setup)


function handleOnInput(e)  {
    e.value = e.value.replace(/[^A-Za-z]/ig, '')
  }