var getRequest = require('request');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
getRequest({
    url: 'https://api.dev.ooki.io/public-cms/Articles',
    json: true
}, function (err, press, body) {
    console.log(body);
    var title = [];
    var category = [];
    var authors = [];
    app.get('/app', function (re, res) {
        var i = Math.trunc(Math.random() * 10) + 1;
        title.push(body['data'].map(function (body) { return body.data.articleTitle.iv; })[i]);
        category.push(body['data'].map(function (body) { return body.data.category.iv; })[i]);
        authors.push(body["data"].map(function (body) { return body.data.author.iv; })[i]);
        res.send({
            "ArticleTitle": title,
            "Category": category,
            "Author": authors
        });
    });
});
app.listen(4200, function () {
    console.log('Requests....');
});
