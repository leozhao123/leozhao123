module.exports = (db, app, ObjectId)=>{
    app.post('/deleteroom', (req,res)=>{
      if (!req.body){
        return sendStatus(400);
      }
      roomid = req.body.id;
      const collection = db.collection('Chart');
      collection.deleteOne({id: roomid}, (err, docs)=>{
        collection.find({}).toArray((err, data)=>{
          res.send(data);
        })
      })
    });
  }
