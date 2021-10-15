
module.exports = (db, app)=>{
    var result ;
    app.post('/editroom', (req,res)=>{
    if (!req.body){
        return sendStatus(400);
      }
      const collection = db.collection('Chart');

      room = req.body;
     
      var objectid = room.id ;
      collection.updateOne({id: objectid}, {$set: { channelname : room.channelname, username: room.username}}, ()=>{
        res.send({'ok': room.objectid});
      });
    });
  }