
const express = require('express')
const app = express();

//When use your app any json object or form fill up
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(express.static('public')); //use public files

app.get('/',(req,res)=>{
    return res.render('index.html');
})


const Server = process.env.SERVER || 'http://localhost';
const Port = process.env.PORT || 8000 ;

app.listen(Port,()=> console.info(`Application listen at ${Server}:${Port}`))