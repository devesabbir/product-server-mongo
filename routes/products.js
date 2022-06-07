const express = require('express')
const router = express.Router()
const path = require('path')
const { getProducts,postProduct , deleteProducts , getSingleProduct , editProduct} = require(path.join(__dirname, '../controller/products.js'))


router.route('/').get(getProducts).post(postProduct)
router.route('/:id').delete(deleteProducts).get(getSingleProduct).put(editProduct).patch(editProduct)


module.exports = router