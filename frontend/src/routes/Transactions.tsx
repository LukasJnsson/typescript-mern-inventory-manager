
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useTitle from "../hooks/useTitle";
import ExternalTabLayout from '../layouts/ExternalTabLayout';
import Loading from '../components/default/Loading';
import Table from '../components/default/Table';
import { getTransactions } from '../features/transaction.feature';
import { transactionColumns } from '../consts/transaction.consts';


export default function Transactions() {
  useTitle('In- och utleverans');

  const dispatch = useDispatch<any>();
  const { transactions, isLoading } = useSelector((state: any) => state.transactions);

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  return (
    <ExternalTabLayout>
      {
      isLoading
      ?
      <Loading />
      :
      <Table className="mui-table" columns={transactionColumns} rows={transactions} />
      }
    </ExternalTabLayout>
  );
};