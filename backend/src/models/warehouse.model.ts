
import mongoose from "mongoose";


const warehouse = new mongoose.Schema({
    id: { 
        type: String, 
        unique: true 
    },
    name: String
});


warehouse.pre('save', async function (next) {
    const count = await mongoose.models['warehouses'].countDocuments();
    this.id = `W${count + 1}`;
    next();
});


const Warehouse = mongoose.model('warehouses', warehouse);


export default Warehouse;