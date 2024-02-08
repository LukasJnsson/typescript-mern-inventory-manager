
import { GridColDef } from '@mui/x-data-grid';


export default interface ITableProps {
    className: string;
    columns: GridColDef[];
    rows: any[];
};