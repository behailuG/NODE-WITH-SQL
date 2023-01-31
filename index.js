'use strict';
const express=require('express');
const config=require('./config');
const cors=require('cors');
const bodyParser=require('body-parser');
const bookRoutes = require('./routes/bookRoutes');

const app=express();
app.use(cors());
app.use(bodyParser.json());
app.listen(config.port,()=>console.log('Server is listening on port '+config.port));

app.use('/api',bookRoutes.routes);
