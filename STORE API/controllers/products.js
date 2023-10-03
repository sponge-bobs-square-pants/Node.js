const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
    res.status(200).json({msg: `Products testing route`});
 
}
const getSingleProduct = async (req, res) => {
//  res.status(200).json({msg: req.params.id})
    const productID = req.params.id;
    const product = await Product.findById(productID);
    if(!product){
        return res.status(404).json({msg:`No task with the id: ${productID}`})
    }
    return res.status(200).json({product});
}

const getAllProducts = async (req, res) => {
    // res.status(200).json({msg: `Products route`});
    // const data = await Product.find({});
    // return res.status(200).json({data})
    const {Featured,id} = req.query;
    const queryObject = {};

    if(Featured){
        queryObject.Featured = Featured === 'true' ? true : false
    }
    if(id){
        queryObject._id = id
    }
    const data = await Product.find(queryObject);
    // console.log(data);
    return res.status(200).json({data, nbHits: data.length});
    }

module.exports = {
    getAllProductsStatic,
    getAllProducts,
    getSingleProduct,
}