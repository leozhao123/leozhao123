module.exports = (db, app)=>{
    app.post('/add', (req, res)=>{
      if(!req.body){
        return res.sendStatus(400);
      };
      user = req.body
      const collection = db.collection('User');
      collection.find({'id': user.id}).count((err, count)=>{
        if (count == 0){
          collection.insertOne(user, (err, dbres)=>{
            if(err) throw err;
            let num = dbres.insertedCount;
            res.sendStatus(200)
                  console.log("adding")
          })
        }else{
          res.send({num:0, err:"duplicate items"});
        }
      })
    })
    }
    