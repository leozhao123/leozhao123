
module.exports = (db, app)=>{
    app.post('/edit', (req,res)=>{
      console.log("update user profile")
    if (!req.body){
        return sendStatus(400);
      }
      user = req.body;
      var objectid = user.id ;
      const collection = db.collection('User');
      collection.updateOne({id: objectid}, {$set: {name: user.name}}, ()=>{
        res.send({'ok': user.objectid});
      });
    });
  }