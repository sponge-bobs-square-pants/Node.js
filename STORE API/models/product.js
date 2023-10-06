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
    },
    Colors:{
        type:[String]
    },
    Reviews:{
        type:Number,
        default: 10
    },
    Stars:{
        type:Number,
        default: 4.5
    },
    Stock:{
        type: Number,
        required: [true, 'Please enter the no of products']
    }

});
productSchema.pre('save', function (next) {
    if (!this.Description) {
        // Set the default Description value if it's null or undefined
        this.Description = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ';}
    if (!this.Stars) {
        // Set the default Description value if it's null or undefined
        this.Stars = 4.5;
    }
    if (!this.Reviews) {
        // Set the default Description value if it's null or undefined
        this.Reviews = 10;
    }
    next();
});

module.exports = mongoose.model('Products', productSchema);