const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id:{
        type:Number,
        required:[true, 'Id must be provided']
    },
    ProductName:{
        type:String,
        required:[true, `Product Name must be provided`]
    },
    Price:{
        type:Number,
        required:[true, `Kindly provide the price`]
    },
    Image:{
        type:String
    },
    Material:{
        type:String,
        default: 'COTTON'
    },
    Size:{
        type:[String],
        default:['M', 'L', 'XL', 'XXL']
    },
    Company:{
        type:String,
        required:[true, `Company name must be provided`],
        default:'Generic'
    },
    Description:{
        type:String,
    },
    Category:{
        type:String,
        enum:{
            values:["Nightdress"],
            message:'{VALUE} is not supported'
        }
        // enum:["Nightdress"]
    },
    shipping:{
        type:Boolean,
        default:true
    },
    Featured:{
        type:Boolean,
        default:false
    }

});

module.exports = mongoose.model('Products', productSchema);