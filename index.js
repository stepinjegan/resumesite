var http=require('http');
var fs=require('fs');
var url=require('url');
const PORT=process.env.PORT ||5000



http.createServer(function(req,res){
    var r=url.parse(req.url,true);
    var x="." +r.pathname ;
    if(x=='./'){
        x='./homepage';
    }
    var x=x + ".html"
  
   

    fs.readFile(x,function(err,data){
     
        res.writeHead(200,{'Content-type':'text/html'})
        res.write(data);
        res.end();
    });
   
   
   
   


}).listen(PORT);