module.exports = (db, app)=>{
    app.get('/listrooms', (req,res)=>{
      console.log("reading data from db")
      const collection = db.collection('Chart');  
      collection.find({}).toArray((err, data)=>{
        res.send(data);
      })
    })
  
  }
  