const mongoose = require('mongoose');



const ProductSchema = new mongoose.Schema({
    image: { type: String,},
    title: { type: String},
    productBody: { type: String,
    category: { type: String},

},
}, { timestamps: true });


// This block of code came from DojoHall where I and the TA lead spent 3 hrs trying to figure out how to validate the title to be unique on the last exam.

// ProductSchema.path('title').validate(async function(value) {
//     const matchingTitle = await mongoose.models.product.findOne({title: value})
//     if (this._conditions===undefined && matchingTitle!==null) return false; 
//     if (this._conditions!==undefined && matchingTitle !== null && this._conditions._id.toString()!==matchingTitle._id.toString()) return false;
//     return true;
//     console.log("blah", matchingTitle._id.toString())
//     console.log("Seperate")
//     // console.log ("this",this._conditions._id.toString()===matchingTitle._id.toString())
//     console.log(this._conditions)
// },"product title must be unique" )


module.exports = mongoose.model('product', ProductSchema);