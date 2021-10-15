const { info } = require("console");

module.exports = (db, app)=>{
    app.post('/login', (req, res,next)=>{
      if(!req.body){
        return res.sendStatus(400);
      };
      infor = req.body
      const collection = db.collection('User');

      collection.find({'name':infor.name,'password':infor.password}).count((err, count)=>{
        if (count == 0){
            next(err)
        }else{
            const collection = db.collection('User');  
          collection.updateOne({'name':infor.name}, {$set: {login: true}
        })
        collection.find({}).toArray((err, data)=>{
        
        res.send(data);
      })

        }
      })
    })
    }
    