const {Router} = require("express")
const router=Router();
const Todo = require("../model/Todo")
router.get("/",async (req,res)=>{
        const todos =await Todo.find({}).lean();//lean hata vermemesi için 
        res.render('index',{
            title:"Todo List",
            isIndex:true,
            todos
        })

});


router.get("/Create",(req,res)=>{

    res.render('Create',{
        Adress:"Create List",
        Country:"Create List",
        City:"Create List",
        isCreate:true
    })
});

router.post("/Create", async (req,res)=>{
     const todo = new Todo({ 
        Adress:req.body.Adress,
        Country:req.body.Country,
        City:req.body.City,
        title:req.body.title,
        
     });
    await todo.save();
    res.redirect('/');
    
});


router.post("/completed", async (req,res)=>{
    const  getTodo = await Todo.findById(req.body.id);
    getTodo.completed=true;
    await getTodo.save();
   res.redirect('/');
   
});
module.exports=router;