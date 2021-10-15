module.exports = (db, app)=>{
    app.get('/list', (req,res)=>{
      console.log("reading data from db")
      const collection = db.collection('User');  
      collection.find({}).toArray((err, data)=>{
        res.send(data);
      })
    })
  
  }