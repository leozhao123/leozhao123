module.exports={
    connect:function(io,PORT){



        io.on('connection',(socket)=>{
            console.log('user connection on port' +PORT + ':' +socket.id);
            socket.o('message',(message)=>{
                io.emit('message',message);
            })
        });
    }
}