

export const transactionFormValues = {
    warehouse: '',
    product: '',
    change: 0
};


export const transactionColumns = [
  { field: 'id', headerName: 'Produktnr', flex: 1 },
  { field: 'date', headerName: 'Datum', flex: 1 },
  { field: 'product', headerName: 'Produkt', flex: 1 },
  { field: 'warehouse', headerName: 'Till/Från', flex: 1 },
  { field: 'change', headerName: 'Förändring', flex: 1, cellClassName: 'change-cell' }
];