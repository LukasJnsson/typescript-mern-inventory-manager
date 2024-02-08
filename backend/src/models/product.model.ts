
import mongoose from "mongoose";


const product = new mongoose.Schema({
    id: { 
        type: String, 
        unique: true 
    },
    name: String,
    price: Number
});


product.pre('save', async function (next) {
    const count = await mongoose.models['products'].countDocuments();
    this.id = `P${count + 1}`;
    next();
});


const Product = mongoose.model('products', product);


export default Product;