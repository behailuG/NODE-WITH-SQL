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
        const oneBook=await bookData.getById(id);
        res.send(oneBook);
    }catch(error){
        res.status(404).send(error.message);
    }
}
const insertBook=async (req,res,next)=>{
    try{
        const book= req.body;
        const create=await bookData.addBook(book);
        res.send(create);
    }
    catch(error){
        res.status(404).send(error.message);
    }
}
const editBook=async (req,res,next)=>{
    try{
        const id=req.params.id;
        const book=req.body;
        const updateBook=await bookData.editBook(id,book);
        res.send(updateBook);
    }catch(error){
        res.status(404).send(error.message);
    }
}
module.exports={
    getBooks,
    getBook,
    insertBook,
    editBook
}