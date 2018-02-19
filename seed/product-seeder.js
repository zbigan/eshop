var Product = require("../models/product");
var mongoose = require("mongoose");
mongoose.connect("mongodb://zbig:zbig@ds141068.mlab.com:41068/eshop");


var products = [
    new Product({
        image: "https://vignette.wikia.nocookie.net/yogscast/images/a/a5/Grand_Theft_Auto_V.png/revision/latest?cb=20160703235415",
        title: "GTA V",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 50
    }),
    new Product({
        image: "https://images-na.ssl-images-amazon.com/images/I/81rSkcE4IYL._SX342_.jpg",
        title: "GTA IV",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 40
    }),
    new Product({
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82hGy2aP6W3871SHtYrhNgkOOULpJekYJVafpPoTeLNwbi8uh",
        title: "GTA III",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 30
    }),
    new Product({
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWlZEEvPuC5Eo31UQmDPbvYHclXbuKBoCQcr40_-6wYlmoKhNX",
        title: "Far Cry 3",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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

