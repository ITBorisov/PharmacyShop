const Product = require('../models/product');
const jwt = require('jsonwebtoken'); 
const config = require('../config/database');



module.exports = (router) => {
    router.post('/product', (req, res) => {

        let product = new Product({
            name: req.body.name,
            category: req.body.category,
            animals: req.body.animals,
            price: req.body.price
        })

        product.save((err) => {
            if(err){
                res.json({ success: false, message: "Cant save the Product", err})
            }else{
                res.json({ success: true, message: "Product is created"})
            }
        })
    })
    router.get('/product', (req, res) => {
        Product.find({}, (err, products) => {
            if (err) {
                res.json({ success: false, message: err });
            } else {

                if (!products) {
                    res.json({ success: false, message: 'No products found.' });
                } else {
                    res.json({ success: true, products: products });
                }
            }
        }).sort({ '_id': -1 }); 
    })
    

return router;
}