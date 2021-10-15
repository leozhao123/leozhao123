const room = require("./room");

module.exports = (db, app)=>{
    app.post('/showchan', (req,res)=>{

  

      const collection = db.collection('channel');  
      collection.find({'roomid':req.body.id}).toArray((err, data)=>{
        
        res.send(data);
      })
    })
  
  }