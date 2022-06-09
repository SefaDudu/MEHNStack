const {Router} = require("express")
const router=Router();
const Todo = require("../model/Todo")
const AdressController = require('../Controller/AdressController');
var adressControler = new AdressController();
router.get("/",adressControler.getAll());
router.get("/Create",(req,res)=>{

    res.render('Create',{
        Adress:"Create List",
        Country:"Create List",
        City:"Create List",
        isCreate:true
    })
});

router.post("/Create",adressControler.Create );


router.get("/Detail/:id",adressControler.Get);

router.post("/Detail/:id",adressControler.Update);
router.get("/Delete/:id",adressControler.Delete);
module.exports=router;