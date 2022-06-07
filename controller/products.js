const path = require('path')
const product = require(path.join(__dirname,'../model/products'))
/**
 * All Products GET
 * @param {*} req 
 * @param {*} res 
 */
const getProducts = async (req,res) => {
   let data = await product.find()
   res.status(200)
   res.json(data)
}

/**
 * get Single Product
 * @param {*} req 
 * @param {*} res 
 */
const getSingleProduct = async (req,res) => {
    let id = req.params.id 
    let data = await product.findById(id)
    res.status(200).json(data)
  }

/**
 * Post Product
 * @param {*} req 
 * @param {*} res 
 */
const postProduct = async (req,res) => {
   let data = await product.create({
       ...req.body
   })
 res.status(201).json({message:"data added"})
}

/**
 * Delete Products
 * @param {*} req 
 * @param {*} res 
 */

const deleteProducts = async (req,res) => {
    let id = req.params.id
  
     await product.findByIdAndDelete(id)
       res.status(200).json({
           message:'Data Delete'
      })
 
}

/**
 * Edit Product
 * @param {*} req 
 * @param {*} res 
 */

const editProduct = async (req,res) => {
    let id = req.params.id  
    let data = await product.findByIdAndUpdate(id, req.body,{ new:true})
    res.status(202).json({
        message:'data edit succesfull'
    })
}


module.exports = {
    getProducts,
    postProduct,
    deleteProducts,
    getSingleProduct,
    editProduct
}