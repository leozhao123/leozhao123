module.exports = (db, app, ObjectId)=>{
    app.post('/delete', (req,res)=>{
      console.log("remove user")
      if (!req.body){
        return sendStatus(400);
      }
      userId = req.body.id;
      console.log(userId)
      const collection = db.collection('User');
      collection.deleteOne({id: userId}, (err, docs)=>{
        collection.find({}).toArray((err, data)=>{
          res.send(data);
        })
      })
    });
  }
