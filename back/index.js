const express = require('express');
const bodyParser = require('body-parser'); 
const routeSign = require ('./routers/signUp_route')
const app = express();

const { response } = require('express');

app.use(express.json());
app.use(express.urlencoded({extended:true})); 
/*var db = require ('./db');
const app = express();
app.use(express.json());
app.use('/client',routeclient);
*/
//check datbase Connection

app.use('/',routeSign);
app.listen(3000, () => {

    console.log('server running...');
}); 