const room = require("./room");

module.exports = (db, app)=>{
    app.post('/showuser', (req,res)=>{
        console.log("?")
      const collection = db.collection('channel');  
      
      collection.find({' channelname':req.body.channelname}).toArray((err, data)=>{
        console.log(data)
        res.send(data);
      })
    })
  
  }