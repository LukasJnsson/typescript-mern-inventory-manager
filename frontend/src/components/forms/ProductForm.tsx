
import { Formik, Form as FormikForm } from "formik";
import { useDispatch } from 'react-redux';
import Input from "../default/Input"
import Submit from "../default/Submit";
import productSchema from "../../schemas/product.schema";
import { postProduct } from "../../features/product.feature";
import { productFormValues } from "../../consts/product.consts";


export default function ProductForm() {
  const dispatch = useDispatch<any>();

  return (
    <>
      <Formik 
        initialValues={productFormValues}
        validationSchema={productSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(postProduct(values));
          resetForm();
        }}
      >
        <FormikForm className="formik-form">
          <Input label="Produktnamn" name="name" type="text" placeholder="Produktnamn" />
          <Input label="Pris" name="price" type="text" placeholder="Pris" />
          <Submit label="Lägg till produkt" />
        </FormikForm>
      </Formik>
    </>
  );
};