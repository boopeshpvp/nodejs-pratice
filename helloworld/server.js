const http=require('http') //http module make node.js act as http server
//createServer method of http create new httpserver and returns it
//req=http.incoming message object
//res=http.Server response Object  
//these obj handle http call.
const server=http.createServer((req,res)=>{
  res.statusCode=200, //statusCode 200 indicates successfull response
  res.setHeader('content-type','text/plain'); // we set content-type header
  res.end('Hello World') // we close the response by adding end
})
//server set to listen on specified port and hostname, when server is ready callback function is called.
const port=4000
const hostname='localhost'
server.listen(port,hostname,()=>{
      console.log(`server is running on http://${hostname}:${port}`);
})