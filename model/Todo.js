const {Schema,model} = require('mongoose');
const Adress = new Schema({

    Adress: {

        type:String,
        required : false
    },
    Country: {

        type:String,
        required : true
    },
    City: {

        type:String,
        required : true
    },

    completed : {
        type:Boolean,
        default:false,
    }
})

module.exports=model('Todo',Adress)