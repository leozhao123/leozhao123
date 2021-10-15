
const express = require('express');
const app = express();
const cors = require('cors');
const path =require('path');
app.use(cors())
const formidable = require('formidable')
var bodyParser = require('body-parser');;
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'../dist/imageupload')));
app.use('/images',express.static(path.join(__dirname,'./userimages')));
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
const { ObjectId } = require('bson');
const url = 'mongodb://localhost:27017';
var http = require('http').Server(app);
var server = http.listen(3000, function(){
  console.log("Server is running on port:3000")
});
module.exports = server;
MongoClient.connect(url, (err, client)=>{
  if (err){
    return console.log(err)
  }
  const dbName = 'mydb';
  const db = client.db(dbName);
  require('./add')(db, app);
  require('./list')(db, app);
  require('./delete')(db, app,ObjectID);
  require('./edit')(db, app);
  require('./login')(db, app);
  require('./newroom')(db, app);
  require('./listrooms')(db, app);
  require('./editroom')(db, app);
  require('./deleteroom')(db, app);
  require('./logout')(db, app);
  require('./currentuser')(db, app);
  require('./addchannel')(db, app);
  require('./putuser')(db, app);
  require('./showchan')(db, app);
  require('./uploads')(app,formidable);
  
  require('./showuser')(db,app);

}) 
