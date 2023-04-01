var express = require('Express');
var router = express.Router(); 
router.get('/', function(req,res){
    res.sendFile(__dirname+'/'+'index.html')
});

router.get('/youtube', function(req,res){
    res.redirect('https://www.youtube.com/')
})
router.get('/wiki', function(req,res){
    res.redirect('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_url')
})
module.exports = router;