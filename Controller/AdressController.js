const AdressService = require('../Service/AdressService');

const adressService=new AdressService();

class AdressController {
    

    async getAll(req, res) {
        try {
            const todos = await adressService.GetAll();
            res.render('index',{
                title:"Adres Listesi",
                isIndex:true,
                todos
            })
        } catch (error) {
            res.status(403).json(error);
        }
    }
    async Create(req,res){
        const todo = new Todo({ 
           Adress:req.body.Adress,
           Country:req.body.Country,
           City:req.body.City,
           title:req.body.title,
           
        });
      var rest = await adressService.Create(todo);
       res.redirect('/');
       
   }

   async Get(req,res){
   
    const  getAdress = await adressService.findById(req.params.id);
   
    res.render('Detail',{
        getAdress
    })
   
}

   async Update(req,res){
    try {
     const  getAdress = await adressService.findById(req.params.id);
     getAdress.id=req.params.id;
         getAdress.Adress= req.body.Adress;
         getAdress.City= req.body.City;
         getAdress.Country=req.body.Country;
     
     const updated = await adressService.Update(getAdress);
     res.redirect('/');
    } catch (error) {
        console.log(error) 
    } 
 
   
}


async Delete(req,res){
    const  getAdress = await adressService.findById(req.params.id);
   var  adressDelete=   await adressService.deleteOne(getAdress);
    res.redirect('/');
   
}
   
}

module.exports = AdressController;