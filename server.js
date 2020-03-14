const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const path = require('path')



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(express.static('python'));
// app.use(express.static('views'));

app.use('/python', express.static(path.join(__dirname, 'python')))
app.use('/views', express.static(path.join(__dirname, 'views')))


app.set('view engine','ejs')




app.get('/',(req,res)=>{
	res.render('index');
})

app.get('/output',(req,res)=>{
	// console.log(req.body.usertext)
	res.send("req.body.usertext")
})

// app.get('/test',(req,res)=>{
// 	res.render("test")
// })


app.post('/name', callName); 
  
function callName(req, res) { 
	const text = {name:req.body.usertext}
     
    const spawn = require("child_process").spawn; 
 
    const processes = spawn('python',["python/hello.py",req.body.usertext]);
 
    // console.log(process)

    processes.stdout.on('data', (data)=> { 
        res.render('output',{text}); 
    } ) 

    processes.stderr.on('data',(data)=>{
    	console.log(data)
    	res.send(data.toString())
    })
} 


app.listen(80,()=>console.log("server started at port 80"))