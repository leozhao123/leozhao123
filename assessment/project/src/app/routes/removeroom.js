module.exports = (db, app, ObjectId)=>{
    app.post('/removeroom', (req,res)=>{
      console.log("remove room")
      if (!req.body){
        return sendStatus(400);
      }
      userId = req.body;
      console.log(userId)
    })
}
     //