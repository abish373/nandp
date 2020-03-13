const express = require('express');
const app = express()
const bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.set('view engine','ejs')

app.get('/',(req,res)=>{
	res.render("index")
})

app.post('/output',(req,res)=>{
	console.log(req.body.usertext)
	res.send(req.body.usertext)
})



app.get('/name', callName); 
  
function callName(req, res) { 
     
    const spawn = require("child_process").spawn; 
 
    const processes = spawn('python',["python/hello.py"]);
 
    // console.log(process)

    processes.stdout.on('data', (data)=> { 
        res.send(data.toString()); 
    } ) 
} 




app.listen(80,()=>console.log("server started at port 80"))