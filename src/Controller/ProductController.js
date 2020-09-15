const Product = require('../models/Product')


createProduct = (req, res) => {
    const body = req.body
    if (!body) return res.status(400).json({error: 'wrong request body'})

    const product = new Product(body)
    product
        .save()
        .then(() => {
            return res.status(201).json({data: product})
        })
        .catch(err => res.status(400).json({error: err}))
}

getProduct = async (req, res) => {
    await Product.findOne({ _id: req.params.id}, (err, product) => {
        if ( err ) return res.status(400).json({error: err})
        return res.status(200).json({data: product })
    })
        .catch(err => console.log(err))
}

getProducts = async (req, res) => {
    await Product.find({}, (err, products) => {
        if ( err ) return res.status(400).json({error: err})

        return res.status(200).json({data: products })
    })
        .catch(err => console.log(err))
}

module.exports = {
    getProducts,
    getProduct,
    createProduct
}