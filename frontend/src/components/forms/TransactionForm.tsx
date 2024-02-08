
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form as FormikForm } from "formik";
import Input from "../default/Input";
import Select from "../default/Select";
import Submit from "../default/Submit";
import transactionSchema from '../../schemas/transaction.schema';
import { postTransaction } from '../../features/transaction.feature';
import { transactionFormValues } from '../../consts/transaction.consts';

export default function TransactionForm() {

  const dispatch = useDispatch<any>();
  const { warehouseOptions, productOptions } = useSelector((state: any) => state.inventories);

  return (
    <>
    {
      warehouseOptions.length > 0 && productOptions.length > 0 
      &&
      <Formik 
      initialValues={transactionFormValues}
      validationSchema={transactionSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(postTransaction(values));
        resetForm();
      }}
      >
        <FormikForm className="formik-form">
          <Select label="Lager" name="warehouse" options={warehouseOptions}/>
          <Select label="Produkt" name="product" options={productOptions}/>
          <Input label="In/Utgående" name="amount" type="text" placeholder="In/Utgående" />
          <Submit label="Bekräfta förändring" />
        </FormikForm>
      </Formik>
    }
    </>
  );
};