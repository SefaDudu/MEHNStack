const express = require("express");
const mongoose=require("mongoose");
const app = express();
const PORT = 5000;
const uri = "mongodb+srv://sefadudu:dudusefa@cluster0.a6tyc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const exhbs=require("express-handlebars");
const todoRoutes = require("./routes/todos");
const hbs = exhbs.create({

    defaultLayout:'main',
    extname:'hbs'
    
    })
    app.engine('hbs',hbs.engine)
    app.set('view engine', 'hbs');
    app.set('views', './views');
app.use(express.urlencoded({extended:true}));// html body datasını ayıklamaya yarar
app.use(express.static('public'))
app.use(todoRoutes);
async function start(){
try {
    await mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })

    
app.listen(process.env.PORT || PORT,()=>{
    console.log("Server Running")
})

} catch (error) {
     console.log(error)
}

}


start();