const express  = require('express');
const port = process.env.port || 8080;
const app = express();

app.use(express.static( dirname + "/dist/"));
app.get(/.*/, function(req, res){
	res.sendfile(__dirname + "/dist/index.html");
});
app.listen(port);
console.log("server started....");