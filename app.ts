const getRequest = require('request');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
getRequest({
    url: 'https://api.dev.ooki.io/public-cms/Articles', 
    json: true
}, (err: any,press: any,body: any) => {
    console.log(body);
    let title: any[] = [];
    let category: any[] = [];
    let authors: any[] = [];
    app.get('/app', (re: any, res: any) => {
            
                let i=Math.trunc(Math.random()*10)+1;
                title.push(body['data'].map((body: { data: { articleTitle: { iv: any; }; }; }) => body.data.articleTitle.iv)[i]);
                category.push(body['data'].map((body: { data: { category: { iv: any; }; }; }) => body.data.category.iv)[i]);
                authors.push(body["data"].map((body: { data: { author: { iv: any; }; }; }) => body.data.author.iv)[i]);
            
            res.send({
                "ArticleTitle": title,
                "Category": category,
                "Author": authors,
            });
    });
});

app.listen(4200, function() {
    console.log('Requests....');
});
