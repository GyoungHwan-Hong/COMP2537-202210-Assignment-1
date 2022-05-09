const express = require('express')
const app = express()


app.set('view engine', 'ejs');
app.listen(5000, function (err) {
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
    // res.render("profile.ejs", {
    //     "id" : req.params.id

    // });

    res.json ({
        "k1" : "v1",
        "k2" : "v2",
        "k3" : "v3"

    })
})