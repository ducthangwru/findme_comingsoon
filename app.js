const path = require("path");
const express = require("express");
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 8678;
let app = express();
let server = require('http').Server(app);

server.listen(PORT , () => {
    console.log(`App listen on ${PORT}`);
  })

app.use(bodyParser.json());       
app.use(bodyParser.urlencoded({   
    extended: true
}));
app.use(bodyParser.json({ extended : true}));
app.use(bodyParser.urlencoded({ extended : true}));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'src')));


app.get('/', function (req, res, next) {
    res.render('index', {layout: false});
});
