const mongoose = require('mongoose')

const productsModel = mongoose.Schema({
    name:String,
    category:String,
    photo:String,
    price:Number,
    new_price:Number
},{
    timestamps: true
})

module.exports = mongoose.model('product' , productsModel)