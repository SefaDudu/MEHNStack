const {Router} = require("express")
const router=Router();
const Todo = require("../model/Todo")
router.get("/",async (req,res)=>{
        const todos =await Todo.find({}).lean();//lean hata vermemesi için 
        res.render('index',{
            title:"Adres Listesi",
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


router.get("/Detail/:id", async (req,res)=>{
   
    const  getAdress = await Todo.findById(req.params.id).lean();;
   
    res.render('Detail',{
        getAdress
    })
   
});

router.post("/Detail/:id", async (req,res)=>{
   try {
    const  getAdress = await Todo.findById(req.params.id);
    getAdress.id=req.params.id;
        getAdress.Adress= req.body.Adress;
        getAdress.City= req.body.City;
        getAdress.Country=req.body.Country;
    
    const updated = await Todo.updateOne(getAdress);
    res.redirect('/');
   } catch (error) {
       console.log(error) 
   }
    
   
});
router.get("/Delete/:id", async (req,res)=>{
    const  getAdress = await Todo.findById(req.params.id);
     await Todo.deleteOne(getAdress);
    res.redirect('/');
   
});
module.exports=router;