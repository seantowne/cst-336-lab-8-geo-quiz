const express = require("express");
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', async function(req, res){
    console.log("/ GET");
    res.render('home.ejs'); 
});

app.post('/', function(req, res){
    console.log("/ POST");
    console.log(req)
    var data = req.body;
        
    var answerKey = {
        california : data.california == 'sacramento',
        river : data.river == 'mo',
        presidents : data.presidents == ['jefferson','roosevelt'] || data.presidents == ['roosevelt', 'jefferson']
    }
    
    res.json( answerKey );
});

app.get("/*", function(req, res){
    res.send("404 NOT FOUND");
});


app.listen(process.env.PORT || 3000 || 8080, function(){
    console.log("Server is running");
});