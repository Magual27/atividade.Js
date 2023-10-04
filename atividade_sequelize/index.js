const express = require('express'); 
const port = 3000;
const exphbs = require('express-handlebars')
const app = express();
const conn = require('./db/conn')
const User = require('./models/User')

//BODY
app.use(
    express.urlencoded({
      extended: true,
    }),
  )
// importar JSON
app.use(express.json());

const hbs = exphbs.create({
    partialsDir: ['views/partials']  
})

// construção das handlebars
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

//css
app.use(express.static('public'))

app.get('/', (req, res) =>{

    res.render('home') 

})

app.get('/users/cadastrar', (req, res) => {
    res.render('addUser')
})

app.use( (req, res) => {
    res.status(404).render("404");
})

conn.sync().then(() => {
    app.listen(3000);
}).catch((error) => {
    console.log("Não funcionou", error);
})
