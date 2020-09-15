const express = require('express')

const ProductController = require('../Controller/ProductController')

const router = express.Router()

router.post(`/product`, ProductController.createProduct)
router.get(`/product/:id`, ProductController.getProduct)
router.get(`/products`, ProductController.getProducts)

module.exports = router