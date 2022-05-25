var express = require('express');
const { redirect } = require('express/lib/response');
var router = express.Router();
var connection  = require('../lib/db');
 

/* GET students page. */
router.get('/', function(req, res, next) {

    if(req.session.loggedin === true){
      
        connection.query('SELECT * FROM requests ORDER BY Id',function(err, rows)     {
 
            if(err){
                //req.flash('error', err); 
                res.render('admin/requests',
                {
                    page_title: "Students List",
                    data: ''
                });   
            }
            else{
                
                res.render('admin/requests',
                {
                    page_title: "Students List",
                    data: rows
                });
            }                          
             });
        
    }
    else{
        res.redirect('/login')
    }
      
 
    });



module.exports = router;