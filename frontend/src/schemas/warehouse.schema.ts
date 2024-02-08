
import * as Yup from 'yup';


const warehouseSchema = Yup.object({
    name: Yup.string()
        .required('Vänligen ange lagernamn!'),
});


export type Warehouse = Yup.InferType<typeof warehouseSchema>;
export default warehouseSchema;