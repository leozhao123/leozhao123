const { channel } = require("diagnostics_channel");

module.exports = (db, app)=>{
    app.post('/newroom', (req, res)=>{
      if(!req.body){
        return res.sendStatus(400);
      };
      room = req.body
      var objectid = room.id ;
      const collection = db.collection('Chart');
      collection.find({'roomname':room.roomname}).count((err, count)=>{
        if (count == 0){
          collection.insertOne(room);
          collection.find({}).toArray((err, data)=>{
        
            res.send(data);
          })
                }else{
          return res.sendStatus(400);
        }
    })
  
    })
  }
  