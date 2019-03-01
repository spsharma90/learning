var express = require('express');
var cookieParser = require('cookie-parser');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.render('test',);
});
router.post('/data', function(req, res, next) {
  console.log(req.body.r);
  res.send(req.body.r);
});

router.post('/submit', function(req, res, next) {
var email =   req.body.email;
var password =   req.body.password;
console.log(email+"   "+password);
var date = new Date();
var data,data1;
date.setTime(date.getTime() + (60 * 1000));
if(email=="shubham.netmax@gmail.com" && password=="12345")
{
res.cookie("email", email, {expires: date});
res.cookie("password", password, {expires: date});
res.redirect("/");
}
else
{
  res.send("invalid credentials");
}
});

router.post('/result', function(req, res, next) {
    data="hello";
sendRequest(req,res);
  });


  function sendRequest(req,res)
  {
data1="hiiiii";
res.send({"res1":data,"res2":data1});

  }

module.exports = router;
