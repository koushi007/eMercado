const path = require('path');
const express = require('express');

const adminCon = require('../controllers/admin');
const auctionCon = require('../controllers/auction');

const router = express.Router();


router.get('/login-screen',adminCon.get_test);
router.post('/login-screen',adminCon.post_test);

router.get('/home-screen',adminCon.get_home_screen);
router.post('/home-screen',adminCon.post_home_screen_search);

router.post('/product-details',adminCon.get_product_details);
router.post('/product-details-buy',adminCon.get_product_details_buy);
router.post('/product-details-confirm-delivery',adminCon.get_product_details_confirm_delivery);
router.post('/product-details-delete-product',adminCon.get_product_details_delete_product);
router.post('/product-details-update-status',adminCon.get_product_details_update_status);



router.post('/auction-product-details',auctionCon.auction_get_product_details);
router.post('/auction-product-details-place-bid',auctionCon.auction_place_bid);
router.post('/auction-product-details-close-bidding',auctionCon.auction_close_bidding);
router.post('/auction-product-details-delete-product',auctionCon.auction_delete_product);
router.post('/auction-update-status',auctionCon.auction_update_status);
router.post('/auction-confirm-delivery',auctionCon.auction_confirm_delivery);


router.post('/logout',adminCon.post_logout);

// router.get('/prods',adminCon.get_products);



module.exports = router;