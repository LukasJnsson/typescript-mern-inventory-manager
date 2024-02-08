
import { Product } from "../schemas/product.schema";


export const productFormValues: Product = {
    name: '',
    price: 0
};


export const productColumns = [
    { field: 'id', headerName: 'Produktnr', flex: 1 },
    { field: 'name', headerName: 'Benämning', flex: 1 },
    { field: 'price', headerName: 'Pris', flex: 1 },
];