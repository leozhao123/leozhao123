
module.exports = (db, app)=>{
    var result ;
    app.post('/addchannel', (req,res)=>{
    if (!req.body){
        return sendStatus(400);
      }
      const collection = db.collection('channel');
      
      
      room = req.body;
      var objectid = room.roomid ;
      var id1=room.id
      collection.insertOne(room)
      collection.find({}).toArray((err, data)=>{
        res.send(data);
      })

});
    

  }      