var Product = require("../models/product");
var mongoose = require("mongoose");
mongoose.connect("mongodb://zbig:zbig@ds141068.mlab.com:41068/eshop");


var products = [
    new Product({
        image: "https://spontaniskai.lt/wp-content/uploads/2015/06/GTA-5-1024x576.jpg",
        title: "GTA V",
        description: "cool game",
        price: 50
    }),
    new Product({
        image: "https://spontaniskai.lt/wp-content/uploads/2015/06/GTA-5-1024x576.jpg",
        title: "GTA V",
        description: "cool game",
        price: 50
    }),
    new Product({
        image: "https://spontaniskai.lt/wp-content/uploads/2015/06/GTA-5-1024x576.jpg",
        title: "GTA V",
        description: "cool game",
        price: 50
    }),
    new Product({
        image: "https://spontaniskai.lt/wp-content/uploads/2015/06/GTA-5-1024x576.jpg",
        title: "GTA V",
        description: "cool game",
        price: 50
    })
];

var done = 0;
for (var i=0; i<products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            mongoose.disconnect();
        }
    });
}

