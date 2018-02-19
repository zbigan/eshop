var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var Cart = require("./models/cart");
var Product = require("./models/product");
var mongoose = require("mongoose");

mongoose.connect("mongodb://zbig:zbig@ds141068.mlab.com:41068/eshop");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    Product.find({}, function(err, allProducts){
        if(err){
            console.log(err);
        } else {
            res.render("landing", {products: allProducts});
        }
    });
});

app.get("/cart", function(req, res){
    Product.find({}, function(err, cart){
        if(err){
            console.log(err);
        } else {
            res.render("shopping-cart", {cart: cart});
        }
    });
});


app.get("/add-to-cart/:id", function(req, res){
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started!");
});