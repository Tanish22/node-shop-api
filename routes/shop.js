const path = require('path');

const express = require('express');
const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
    const products = admin.products;

    res.render('shop', {prods : products, docTitle : 'Shop'});

    // console.log(adminData.products);
    
    // res.sendFile(path.join(__dirname, '../views', 'shop.html'));
})

module.exports = router;