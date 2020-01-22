const express= require('express');
const morgan = require('morgan'); // Allows to see the user queries in the terminal
const cors = require('cors');
const app = express();

const { mongoose } =  require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));  //function to execute: morgan, parameter: dev (see in terminal)
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));



// Routes

app.use('/api/personal', require('./routes/personal.route'));

// Starting server
app.listen(app.get('port'), ()=>{
    console.log('Server on port ',app.get('port'));
});