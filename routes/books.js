var express = require('express');
var router = express.Router();
var connection  = require('../lib/db');
 

/* GET students page. */
router.get('/', function(req, res, next) {
      
 connection.query('SELECT * FROM books ORDER BY Id',function(err, rows)     {
 
        if(err){
            //req.flash('error', err); 
            res.render('books',
            {
                page_title: "Students List",
                data: ''
            });   
        }else{
            
            res.render('books',
            {
                page_title: "Students List",
                data: rows
            });
        }                          
         });
    });



module.exports = router;