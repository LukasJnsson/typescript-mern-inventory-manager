
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useTitle from "../hooks/useTitle";
import ExternalTabLayout from '../layouts/ExternalTabLayout';
import Loading from '../components/default/Loading';
import TransactionForm from '../components/forms/TransactionForm';
import { getInventoryOptions } from '../features/inventory.feature';


export default function Delivery() {
  useTitle('In- och utleverans');

  const dispatch = useDispatch<any>();
  const { isInventoryOptionsLoading } = useSelector((state: any) => state.inventories);
  const { isLoading } = useSelector((state: any) => state.transactions);

  useEffect(() => {
    isInventoryOptionsLoading && dispatch(getInventoryOptions());
  },[isInventoryOptionsLoading, dispatch]);

  return (
    <ExternalTabLayout>
      {
        (isInventoryOptionsLoading || isLoading)
        ?
        <Loading />
        :
        <TransactionForm />
      }
    </ExternalTabLayout>
  );
};