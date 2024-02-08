
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import Layout from '../layouts/Layout';
import useTitle from '../hooks/useTitle';
import Loading from '../components/default/Loading';
import Table from '../components/default/Table';
import ProductForm from '../components/forms/ProductForm';
import { getProducts } from '../features/product.feature';
import { productColumns } from '../consts/product.consts';


export default function Products() {
  useTitle('Produkter');

  const dispatch = useDispatch<any>();
  const { products, isLoading } = useSelector((state: any) => state.products);

  useEffect(() => {
    isLoading && dispatch(getProducts());
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
              <Grid item><Typography color="text.primary"><QrCode2Icon /></Typography></Grid>
              <Grid item><Typography color="text.primary">Produkter</Typography></Grid>
            </Grid>
          </h3>
          <Table className="mui-table" columns={productColumns} rows={products} />
          <h4>Lägg till produkt</h4>
          <ProductForm />
        </>
      }
    </Layout>
  );
};