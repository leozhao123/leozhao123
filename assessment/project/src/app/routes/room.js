module.exports = (db, app)=>{
    app.post('/room', (req, res)=>{
      if(!req.body){
        return res.sendStatus(400);
      };
      user = req.body

      const collection = db.collection('Chart');
        collection.insertOne(user)
     
    })
}    