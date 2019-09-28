const express=require("express");
const fileupload=require('express-fileupload');

const PORT=process.env.PORT || 5000;
const app=express();
const path=require('path')

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(fileupload());

app.get('/test',(req,res)=>{
    res.json({msg:"Testing FE/BE connection"})
})


app.post('/upload',(req,res)=>{
    if(req.files === null){
        res.json({msg:"No file found! :("})
        console.log("No file found")
    }
    else{
        const file=req.files.file;
        file.mv(path.join(__dirname, `client/public/assets/${file.name}`),(err)=>{
            if(err)throw err;
            else{
                res.json({filename:file.name,filePath:`assets/${file.name}`})
            }
        })
    }
  
})

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}


app.listen(PORT,()=>console.log(`Logged onto port ${PORT}`))