
import { Formik, Form as FormikForm } from "formik";
import { useDispatch } from 'react-redux';
import Input from "../default/Input";
import Submit from "../default/Submit";
import warehouseSchema from "../../schemas/warehouse.schema";
import { postWarehouse } from "../../features/warehouse.feature";
import { warehouseFormValues } from "../../consts/warehouse.consts";


export default function WarehouseForm() {
  const dispatch = useDispatch<any>();

  return (
    <>
      <Formik 
        initialValues={warehouseFormValues}
        validationSchema={warehouseSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(postWarehouse(values));
          resetForm();
        }}
      >
        <FormikForm className="formik-form">
          <Input label="Lagernamn" name="name" type="text" placeholder="Lagernamn" />
          <Submit label="Lägg till lager" />
        </FormikForm>
      </Formik>
    </>
  );
};