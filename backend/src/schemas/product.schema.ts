
import * as Yup from 'yup';


const productSchema = Yup.object({
    name: Yup.string()
        .required('Vänligen ange produktnamn!'),
    price: Yup.number()
        .required('Vänligen ange pris!'),
});


export type Product = Yup.InferType<typeof productSchema>;
export default productSchema;