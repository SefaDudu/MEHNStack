const Todo = require("../model/Todo")

class AdressService{
    async create(adress){
        try {
            const todo = await Todo.create(adress);
            return todo;
        } catch (error) {
            throw error;
        }
    }

    async findById(_id){
        try {
            const todo = await Todo.find(_id);
            return todo;
        } catch (error) {
            throw error;
        }
    }

    async Delete(_id){
        try {
            const todo = await Todo.find(_id);
            return todo;
        } catch (error) {
            throw error;
        }
    }
    async Update(getAdress){
        try {
            const todo = await Todo.updateOne(getAdress);
            return todo;
        } catch (error) {
            throw error;
        }
    }

    async GetAll(){
        try {
            const todo = await Todo.find();
            return todo;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AdressService;