const express = require('express')
const app = express()
const https = require('https')


app.set('view engine', 'ejs');
app.listen(process.env.PORT || 5000, function (err) {
    if (err) console.log(err);
})

// app.get('/', function (req, res) {
//     res.sendFile(__dirname + "/index.html");

// })

// app.get('/contact', function (req, res) {
//     res.send('Hi there, here is my <a href="mailto:ghong10@bcit.ca"> email </a>.')
// })

app.use(express.static('./public'));

app.get('/profile/:id', function (req, res) {
    // res.send(`<h1> Hi there. This pokemon has the id : ${req.params.id} </h1>`)


    const url = `https://pokeapi.co/api/v2/pokemon/${req.params.id}`

    data = ""

    https.get(url, function (https_res) {
        https_res.on("data", function (chunk) {
            data += chunk
        })
        https_res.on("end", function () {
            data = JSON.parse(data)
            console.log("name: " + data.name)

            tmp = data.stats.filter((obj_)=>{
                return obj_.stat.name == "hp"
            }).map((obj2)=>{
                return obj2.base_stat
            })

            res.render("profile.ejs", {
                "id": req.params.id,
                "name": data.name,
                "hp" : tmp[0]
                

            });

            //console.log(JSON.parse(data))
        })
    });



    // res.json ({
    //     "k1" : "v1",
    //     "k2" : "v2",
    //     "k3" : "v3"

    // })
})