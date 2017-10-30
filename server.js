const express = require('express')
const app = express()
const router = express.Router();
var cors = require('cors')
const mongoose = require('mongoose');
const config = require('./config/database')
const bodyParser = require('body-parser')
const path = require('path')


const userAuth = require('./routes/users')(router)
const admin = require('./routes/admin')(router)

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if(err) {
        console.log('Cant connect to the database')
    }else{
        console.log('Connected to the database')
    }
});

app.use(cors({ origin: 'http://localhost:4200' })); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
app.use(express.static(__dirname + '/client/dist'))
app.use('/user', userAuth);
app.use('/admin', admin)


app.get('/', function (req, res) {
  res.send('Hello World!')
})


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})