const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars')
const app = express();



const hbs = exphbs.create({
    partialsDir: ['views/partials'] // --> Uso do Partials 
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

// ----------- endpoints --------------
router.get("/cadastrar", (req, res) =>{
    res.render("cadastrarMusica")
})


router.post("/salvar", (req, res) =>{

    console.log(req.body)

})



module.exports = router;