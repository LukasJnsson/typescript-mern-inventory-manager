
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BalanceIcon from '@mui/icons-material/Balance';
import useTitle from "../hooks/useTitle";
import Layout from "../layouts/Layout";
import Loading from '../components/default/Loading';
import Table from "../components/default/Table";
import { getInventory } from '../features/inventory.feature';
import { inventoryColumns } from '../consts/inventory.consts';


export default function Balance() {
  useTitle('Lagersaldo');

  const dispatch = useDispatch<any>();
  const { inventory, isInventoryLoading } = useSelector((state: any) => state.inventories);

  useEffect(() => {
    isInventoryLoading && dispatch(getInventory());
  }, [isInventoryLoading, dispatch]);

  return (
    <Layout>
      {
        isInventoryLoading
        ?
        <Loading />
        :
        <>
          <h3>
            <Grid container justifyContent={"center"} spacing={1}>
              <Grid item><Typography color="text.primary"><BalanceIcon /></Typography></Grid>
              <Grid item><Typography color="text.primary">Lagersaldo</Typography></Grid>
            </Grid>
          </h3>
            <Table className="mui-table" columns={inventoryColumns} rows={inventory} />
        </>
      }
    </Layout>
  );
};