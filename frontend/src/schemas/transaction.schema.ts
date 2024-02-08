
import * as Yup from 'yup';


const transactionSchema = Yup.object({
    warehouse: Yup.string()
        .required('Vänligen välj ett lager!'),
    product: Yup.string()
        .required('Vänligen välj en produkt!'),
    amount: Yup.number()
        .required('Vänligen ange antal!')
});


export type Transaction = Yup.InferType<typeof transactionSchema>;
export default transactionSchema;