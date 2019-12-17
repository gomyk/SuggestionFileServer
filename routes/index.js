var express = require('express');
var router = express.Router();
var request = require('request');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  //Render Json tree
  if(req.query.path == undefined){
    res.send(500, 'Do not request without query');
  } else {
      if(fs.existsSync('../SuggestionDashBoard'+req.query.path)) {
        if(req.query.keyword == undefined) {
          req.query.keyword = 'total';
        }
        res.render('index',{
          title:"title",
          keyword:req.query.keyword,
          path:req.query.path,
          link:req.query.link});
      } else {
        res.render('error',{
          message:'File not found',
          detail:'It may take some time for a file to be created'});
      }
  }
});

module.exports = router;
