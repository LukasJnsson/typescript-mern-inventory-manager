
import { Warehouse } from "../schemas/warehouse.schema";


export const warehouseFormValues: Warehouse = {
    name: ''
};


export const warehouseColumns = [
    { field: 'id', headerName: 'Lagernr', flex: 1 },
    { field: 'name', headerName: 'Stad', flex: 1 }
];