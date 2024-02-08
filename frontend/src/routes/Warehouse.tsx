
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import Layout from "../layouts/Layout";
import useTitle from "../hooks/useTitle";
import Loading from '../components/default/Loading';
import Table from "../components/default/Table";
import WarehouseForm from "../components/forms/WarehouseForm";
import { getWarehouses } from '../features/warehouse.feature';
import { warehouseColumns } from '../consts/warehouse.consts';


export default function Inventory() {
  useTitle('Lager');

  const dispatch = useDispatch<any>();
  const { warehouses, isLoading } = useSelector((state: any) => state.warehouses);

  useEffect(() => {
    isLoading && dispatch(getWarehouses());
  }, [isLoading, dispatch]);

  return (
    <Layout>
      {
        isLoading 
        ? 
        <Loading />
        :
        <>
          <h3>
            <Grid container justifyContent={"center"} spacing={1}>
              <Grid item><Typography color="text.primary"><WarehouseIcon /></Typography></Grid>
              <Grid item><Typography color="text.primary">Lager</Typography></Grid>
            </Grid>
          </h3>
            <Table className="mui-table" columns={warehouseColumns} rows={warehouses} />
          <h4>Lägg till lager</h4>
            <WarehouseForm />
        </>
      }
    </Layout>
  );
};