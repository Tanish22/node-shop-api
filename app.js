const path = require('path');

// npm dependencies
const express = require('express');
const app = express();

const bodyparser = require("body-parser");

// requiring templating engines
const expressHbs = require('express-handlebars');

// app.set allows us to set any values in express application 

//setting pug engine
app.set('view engine', 'pug')
app.set("views", "views");
 

// setting handlebars engine
app.engine('handlebars', expressHbs());
app.set('view engine', 'handlebars');
app.set('views', 'views');

const port = process.env.PORT || 8000;

// local dependencies 
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// middleware
// app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {      
    res.status(404).sendFile(path.join(__dirname, './views', '404.html'));
})

app.listen(port, () => {
    console.log(`Server is running on port no: ${port}`);    
}) 