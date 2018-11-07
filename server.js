var express = require('express');
var app = express();
app.use(express.static('assets')); //w nawiasach do express.static przekazujemy katalog, w którym znajdują się pliki, które chcemy serwować

app.use('/store', function(req, res, next){
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});

app.get('/userform', function (req, res) {
  const response = {
      first_name: req.query.first_name,
      last_name: req.query.last_name
  };
  res.end(JSON.stringify(response));
});

app.get('/store', function (req, res) {
    console.log('To jest sklep');
    res.send('To jest sklep');
});

var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});
