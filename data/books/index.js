'use strict'
const utils=require('../utils');
const config=require('../../config');
const sql=require('mssql');

const getBooks=async()=>{
    try{
        let pool=await sql.connect(config.sql);
        console.log("database connected")
        const sqlQueries=await utils.loadSqlQueries('Books');
        const list=await pool.request().query(sqlQueries.booklist);
        return list.recordset; 
    }
    catch(error)
    {
        return error.message;
    }
}
const getById=async (bookId)=>{
    try{
        let pool=await sql.connect(config.sql);
        const sqlQueries=await utils.loadSqlQueries('Books');
        const oneBook=await pool.request()
        .input('Id',sql.Int,bookId).query(sqlQueries.bookbyId);
        return oneBook.recordset;
    }
    catch(error){
        return error.message;
    }
}
module.exports={
    getBooks,
    getById
}