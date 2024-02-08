
import { DataGrid } from "@mui/x-data-grid";
import ITableProps from "../../types/table.types";


export default function Table({ className, columns, rows }: ITableProps) {

  const addClass = (params: any) => {
    const isCellNumberAndPositive = typeof params.value === 'number' && params.value >= 0;
    return isCellNumberAndPositive ? 'positive-change' : 'negative-change';
  };

  return (
    <div className={className}>
        <DataGrid
          rows={rows} 
          columns={columns.map(column => ({
            ...column,
            cellClassName: column.field === 'change' ? addClass : undefined
          }))}
          initialState={{
          pagination: {
              paginationModel: { page: 0, pageSize: 10 },
          },
          }}
          pageSizeOptions={[10, 20]}
          disableColumnSelector
          disableRowSelectionOnClick
        />
    </div>
  );
};