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


router.get("/create",(req,res)=>{

    res.render('create',{
        title:"Create List",
        isCreate:true
    })
});

router.post("/create", async (req,res)=>{
     const todo = new Todo({ 
         title:req.body.title,
         completed:false
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