
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useTitle from "../hooks/useTitle";
import ExternalTabLayout from '../layouts/ExternalTabLayout';
import Loading from '../components/default/Loading';
import Table from '../components/default/Table';
import { getInventoryAtDate } from '../features/inventory.feature';
import { inventoryAtDateColumns } from '../consts/inventory.consts';


export default function Balance() {
  useTitle('In- och utleverans');

  const dispatch = useDispatch<any>();
  const { inventoryAtDate, isInventoryAtDateLoading } = useSelector((state: any) => state.inventories);

  useEffect(() => {
    dispatch(getInventoryAtDate());
  }, [dispatch]);
  
  return (
    <ExternalTabLayout>
      {
      isInventoryAtDateLoading
      ?
      <Loading />
      :
      <Table className="mui-table" columns={inventoryAtDateColumns} rows={inventoryAtDate} />
      }
    </ExternalTabLayout>
  );
};