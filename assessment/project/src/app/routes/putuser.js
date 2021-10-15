
module.exports = (db, app)=>{
    app.post('/putuser', (req,res)=>{
      console.log("update user profile")
    if (!req.body){
        return sendStatus(400);
      }
      user = req.body;
      var objectid = user.id ;
      const collection = db.collection('User');
      collection.find({"name":user.name}).count((err, count)=>{
        if (count == 0){
            collection.updateOne({id: objectid}, {$set: {room: user.room}}, ()=>{
                res.send({'ok': user.objectid});
              });
        }else{
            
        
  

        }
      })
      
    });
  }