// Express require
const express = require('express');
const app = express();

// bodyParser require
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// mongoose require
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/wikiDB");

// mongoose wikiSchema
const wikiSchema = {
    title: String,
    content: String
}

// mongoose wikiModel
const wikiModel = mongoose.model('articles', wikiSchema);

// require ejs
const ejs = require('ejs');
app.set('view engine', 'ejs');


// route Method (chained)
app.route("/articles")
    // get Method
    .get(function (req, res) {
        wikiModel.find({}).then((readData, err) => {
            if (!err) {
                res.send(readData);
            }
            else {
                res.send(err);
            }
        })
    })

    // post Method
    .post(function (req, res) {

        const newArticle = new wikiModel({
            title: req.body.title,
            content: req.body.content
        });

        newArticle.save().then((data, err) => {
            if (!err) {
                res.send("article Successfully added");
            }
            else {
                res.send(err);
            }
        });
    })

    // delete Method
    .delete(function (req, res) {
        wikiModel.deleteMany().then((data, err) => {
            if (!err) {
                res.send("successfully Deleted all");
            }
            else {
                res.send(err);
            }
        });
    });

// route method for specific article
app.route("/articles/:query")
    .get(function (req, res) {
        wikiModel.findOne({ title: req.params.query }, { _id: 1, title: 1, content: 1 }).then((data, err) => {
            if (data) {
                res.send(data);
            }
            else {
                res.send("article doesnt found");
            }
        });
    })
    .put(function (req, res) {
        wikiModel.replaceOne(
            { title: req.params.query },
            {
                title: req.body.title,
                content: req.body.content
            },
            { overwrite: true })
            .then((data, err) => {
                if (data) {
                    res.send("successfully updated");
                }
                else {
                    res.send(err);
                }
            }
        );
    })
    .patch(function(req,res){
        console.log(req.body);
        wikiModel.updateOne(
            { title: req.params.query },
            {
                $set: req.body
            })
            .then((data, err) => {
                if (data) {
                    res.send("successfully updated specific part");
                }
                else {
                    res.send(err);
                }
            }
        );
    })
    .delete(function(req,res){
        wikiModel.deleteOne({title: req.params.query}).then((data, err) => {
            if (!err) {
                res.send("successfully Deleted specific article");
            }
            else {
                res.send(err);
            }
        });
    })

// listen Method
app.listen(process.env.PORT || 3000, function () {
    console.log("Server started at port 3000");
})
