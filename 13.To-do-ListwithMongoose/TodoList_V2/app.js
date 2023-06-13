const express = require('express');
const bodyparser = require('body-parser');

// loadash package

const _ = require ('lodash');

const app = express();

//using ejs module
app.set('view engine', 'ejs');

//body-parser
app.use(bodyparser.urlencoded({ extended: true }));


app.use(express.static("public"));

//Database
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/toDoList')

const itemSchema = {
    name: String
}

const itemModel = mongoose.model('items', itemSchema);

const itemOne = new itemModel({
    name: "Make Pancakes"
});

const itemTwo = new itemModel({
    name: "Clean your Room"
});

const itemThree = new itemModel({
    name: "Buy your shopping lists"
});

const defaultItems = [itemOne, itemTwo, itemThree];

// new Schema for custom pages 

const customSchema = {
    name: String,
    item: [itemSchema]
};

const customModel = mongoose.model('customs', customSchema);

// rendering

app.get("/", function (req, res) {

    const items = itemModel.find().then((data) => {
        if (data.length === 0) {
            const insertedItems = itemModel.insertMany(defaultItems);
            res.redirect("/");
        }
        else {
            res.render('lists', { listTitle: "Today", newItemHTML: data });
        }
    });
});

app.post("/", function (req, res) {

    const newCustomItem = req.body.newItem;
    const newCustomListName = req.body.list;

    const newItem = new itemModel({
        name: newCustomItem
    })

    if (newCustomListName === "Today") {
        newItem.save();
        res.redirect("/");
    }
    else {
        customModel.findOne({ name: newCustomListName }).then((data, err) => {
            data.item.push(newItem);
            data.save();
            res.redirect("/"+ newCustomListName);
        });
    }
})

app.post("/delete", function (req, res) {
    const checkedNameID = req.body.checkName;
    const listName=req.body.listName;
    console.log(checkedNameID);
    console.log(listName);

    if(listName=== "Today")
    {
        itemModel.findByIdAndRemove(checkedNameID).then((data) => {
            if (!data) {
                console.log("item successfully deleted");
            }
        });
        res.redirect("/");
    }
    else{
        customModel.findOneAndUpdate({name: listName},{$pull: {item: {_id:checkedNameID}}}).then((data,err)=>{
            if(!err){
                res.redirect("/"+listName);
            }
        });
    }
})

app.get("/:paraName", function (req, res) {
    const paraName = _.capitalize(req.params.paraName);

    customModel.findOne({ name: paraName }).then((foundList, err) => {
        if (!err) {
            if (!foundList) {
                    const newList = new customModel({
                    name: paraName,
                    item: defaultItems
                })
                newList.save();
                res.redirect("/" + paraName);
            }
            else {
                res.render("lists", { listTitle: foundList.name, newItemHTML: foundList.item })
            }
        }
    });

})


app.get("/about", function (req, res) {
    res.render('about');
});

app.listen(process.env.PORT || 3000, function () {
    console.log("server has started");
});
