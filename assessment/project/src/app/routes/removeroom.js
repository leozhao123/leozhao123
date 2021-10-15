// remove room if delete betton hit
module.exports = (db, app, ObjectId)=>{
    app.post('/removeroom', (req,res)=>{
      console.log("remove room")
      if (!req.body){
        return sendStatus(400);
      }   
      userId = req.body;
      console.log(userId)
       collection.deleteOne({id: userId}, (err, docs)=>{
      })

      
    })
}
     