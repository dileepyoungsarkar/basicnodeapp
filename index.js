var http=require('http');
var connect=require('connect');
var bodyParser=require('body-parser');

var app=connect().use(bodyParser.urlencoded(
    {extended:true}
))
.use((req,res)=>{
    var pasedInfo={};
    pasedInfo.firstName=req.body.userFirstName;
    pasedInfo.lastName=req.body.userLastName;
    res.end("User info parsed from : "+
pasedInfo.firstName+" "+pasedInfo.lastName);
});
http.createServer(app).listen(3456);
console.log("Listening on port 3456");