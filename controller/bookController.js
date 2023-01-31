'use strict';
const bookData=require('../data/books');

const getBooks=async (req,res,next)=>{
    try{
        const books=await bookData.getBooks();
        res.send(books); 
    }catch(error){
        res.status(400).send(error.message);
    }
}
const getBook=async (req,res,next)=>{
    try{
        const id=req.params.id;
        const oneEvent=await bookData.getById(id);
        res.send(oneEvent);
    }catch(error){
        res.status(404).send(error.message);
    }
}
module.exports={
    getBooks,
    getBook
}