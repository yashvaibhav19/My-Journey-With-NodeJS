var http = require('http')
const PORT = process.env.PORT || 3000
var server = http.createServer(function(req,res){
    res.end("killer vibes")
})

server.listen(PORT,()=>{
    console.log("Server is listening on port",PORT)
    server.setTimeout(2000,()=>{
        console.log("shutting down the server...")
        server.close()
    })
})

