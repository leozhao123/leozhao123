module.exports = (db, app, ObjectId)=>{
    app.post('/logout', (req,res)=>{
        console.log("update user profile")
      if (!req.body){
          return sendStatus(400);
        }
        user = req.body;
        var objectid = user.id ;
        const collection = db.collection('User');
        collection.updateOne({'login':true}, {$set: {login:false}}, ()=>{
            collection.find({}).toArray((err, data)=>{
              })
          res.send({'ok': user.objectid});
        });
      });
    }
