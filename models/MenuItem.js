const mongoose = require('mongoose');

const menuItemSchema= new mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },
        price :
        {
            type : Number,
            reqired : true
        },
        taste : {
            type : String,
            emun : ['sweet', 'spicy', 'sour'],
            requied : true
        },
        is_drink : {
            type : Boolean,
            default : false
        },
        ingredients : {
            type : [String],
            deafult : []
        },
        num_sales : {
            type : Number,
            default : 0
        }
    }
);

const MenuItem= mongoose.model('MenuItem', menuItemSchema);
module.exports=MenuItem;
