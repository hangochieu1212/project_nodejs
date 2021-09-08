const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const port = 3000;
const route = require('./routes');

//const db = require('./config/db/index');
const db = require('./config/db/index');
const { Mongoose } = require('mongoose');
//connect to database
db.connect();

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

//app.use(morgan('combined'));

app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
