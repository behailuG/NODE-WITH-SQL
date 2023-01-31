'use strict';
const express=require('express');
const bookController=require('../controller/bookController');
const router=express.Router();
const {getBooks,getBook}=bookController;
router.get('/books',getBooks);
router.get('/book/:id',getBook);

module.exports={
    routes:router
}