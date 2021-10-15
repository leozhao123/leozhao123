module.exports = function(app,formidable){
    app.post('/uploads', (req,res)=>{
        
        var form = new formidable.IncomingForm({ uploadDir:'./userimage'});
        form.keepExtensions = true;
        console.log('1');
        console.log(form.on);

        form.on('error',function(err){

            throw err;
            res.send({
                result:"failed",
                data:{},
                numberOfImages:0,
                messages:"error"
            });
        });
        form.on('fileBegin',function(name,file){
            file.path = form.uploadDir +"/"+file.name;
            console.log('2');

        });
        form.on('file',function(field,file){
            console.log('3');

            res.send({
                result:"ok",
                data:{'filename':file.name,'size':file.size},
                numberOfImages:1,
                messages:"no error"
            })
        })
    })




}
