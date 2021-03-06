const router = require('express').Router()
const Product = require('../models/Product')

//create
router.post('/create/new', async (req, res)=>{
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save()
    res.status(200).json(savedProduct)
  } catch (err) {
    res.status(500).json(err)
  }
})

//get all
router.get('/', async (req,res)=>{
  const qNew = req.query.new
  const qCategory = req.query.category

  try{
    let products
    if(qNew){
      products = await Product.find().sort({createdAt: -1}).limit(1)
    }else if(qCategory){
      products = await Product.find({
        categories: {
          $in: [qCategory]
        }
      })
    }else{
      products = Product.find()
    }

    res.status(200).json(products)
  }catch(err){
    res.status(500).json(err)
  }
})

module.exports = router