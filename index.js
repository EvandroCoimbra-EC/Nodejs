var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/home',function(req, res){
    res.sendFile(__dirname + '/public/html/home.html');
})


app.get('/jovemtech/listaalunos', function(req,res) {
    res.send('Lista alunos !');
});

app.get('/jovemtech/professores', function(req,res) {
    res.send('Lista professores !');
});

app.get('/jovemtech/cursos', function(req,res) {
    res.send('Lista cursos ofertados !');
});

app.get('/jovemtech/inscricao', function(req,res) {
    res.send('Pagina de inscrição !');
});

app.get('/jovemtech/comentarios', function(req,res) {
    res.send('Página para deixar seu comentário !');
});

app.listen(8081,function(){
    console.log ("Servidor rodado na porta http://localhost:8081/home");
});