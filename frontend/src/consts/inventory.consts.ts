

export const inventoryColumns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'product', headerName: 'Produkt', flex: 1 },
    { field: 'warehouse', headerName: 'Lager', flex: 1 },
    { field: 'amount', headerName: 'Lagersaldo', flex: 1 }
  ];


export const inventoryAtDateColumns = [
    { field: 'id', headerName: 'Lagernr/Produktnr', flex: 1 },
    { field: 'date', headerName: 'Datum', flex: 1 },
    { field: 'product', headerName: 'Produkt', flex: 1 },
    { field: 'warehouse', headerName: 'Lager', flex: 1 },
    { field: 'amount', headerName: 'Antal', flex: 1, cellClassName: 'amount-cell' }
];