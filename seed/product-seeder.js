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
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Halo_Guardians.png/220px-Halo_Guardians.png",
        title: "HALO 5",
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
    }),
    new Product({
        image: "https://upload.wikimedia.org/wikipedia/lt/7/70/Fallout_4_cover_art.jpg",
        title: "Fallout 4",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 50
    }),
    new Product({
        image: "https://static-cdn.jtvnw.net/ttv-boxart/Need%20for%20Speed%20Payback.jpg",
        title: "NFS Payback",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 70
    }),
    new Product({
        image: "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcGWM52CQerHRCtjVeOFTR7xJ9KPd1rRfJpHT0iG1qlY4Ja3FQNdXQNl8FoyO_j1eIbOL6E0zwOglu1HsY3kwZOEfxZ8QisXkKxxc1UvWT2Y0oHbcxRX7M_fq2anQyOBOUsaWXcu6OFly_2DD2HrK6.gxo2Inl8flaEhJM9V3OeUQ-&w=200&h=300&format=jpg",
        title: "Mafia III",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 60
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

