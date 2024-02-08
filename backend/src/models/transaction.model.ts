
import mongoose from "mongoose";


const transaction = new mongoose.Schema({
    id: { 
        type: String, 
        unique: true
    },
    warehouse: { 
        type: String, 
        required: true 
    },
    product: { 
        type: String, 
        required: true 
    },
    amount: { 
        type: Number, 
        required: true 
    },
    date: { 
        type: Date, 
        default: Date.now() 
    }
});


transaction.pre('save', async function (next) {
    const count = await mongoose.models['transactions'].countDocuments();
    this.id = `T${count + 1}`;
    next();
});


const Transaction = mongoose.model('transactions', transaction);


export default Transaction;