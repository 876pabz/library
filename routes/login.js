var express = require('express');
const { redirect } = require('express/lib/response');
var router = express.Router();
var connection  = require('../lib/db');
 

/* GET students page. */
router.get('/', function(req, res, next) {
      
    res.render('login',
            {
                page_title: "Students List"
            }); 
//  connection.query('SELECT * FROM librarian ORDER BY Id',function(err, rows)     {
 
//         if(err){
//             //req.flash('error', err); 
//             res.render('login',
//             {
//                 page_title: "Students List",
//                 data: ''
//             });   
//         }else{
            
//             res.render('login',
//             {
//                 page_title: "Students List",
//                 data: rows
//             });
//         }                          
//          });
    });

router.post('/auth', function(req, res){
    var email = req.body.email
    var password = req.body.password

    connection.query( 'SELECT * FROM librarian WHERE email = ? AND BINARY password = ?',[email, password], function (err, results){
        if (results.length <=0){
            res.redirect('/login')
        }

        else{
            req.session.loggedin = true;
            req.session.uid = results[0].id;
            req.session.name = results[0].name
            
        res.redirect('/requests')}
    })
})


















module.exports = router;