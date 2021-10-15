module.exports = (db, app)=>{
    app.get('/currentuser', (req, res)=>{
        const collection = db.collection('User');
        collection.find({'login':true}).project({role:1,_id:0}).toArray((err, data)=>{
            res.send(data[0]);      
        })
    })
    }
