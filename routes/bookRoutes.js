'use strict';
const express=require('express');
const bookController=require('../controller/bookController');
const router=express.Router();
const {getBooks, getBook,insertBook,editBook,deleteBook}=bookController;
router.get('/books',getBooks);
router.get('/book/:id',getBook);
router.post('/book',insertBook);
router.put('/book/:id',editBook);
router.delete('/book/:id',deleteBook);

module.exports={
    routes:router
}