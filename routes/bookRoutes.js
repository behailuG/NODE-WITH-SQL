'use strict';
const express=require('express');
const bookController=require('../controller/bookController');
const router=express.Router();
const {getBooks, getBook,insertBook}=bookController;
router.get('/books',getBooks);
router.get('/book/:id',getBook);
router.post('/book',insertBook);

module.exports={
    routes:router
}