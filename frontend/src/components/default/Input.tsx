
import { useField, FieldHookConfig } from 'formik';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { ICustomInputProps } from '../../types/form.types';


export default function Input({ placeholder, ...props }: ICustomInputProps & FieldHookConfig<string>) {

  const [field, meta] = useField(props);
    
  return (
    <>
    <FormControl className='formik-component'>
        <TextField id={props.name} {...field} type={props.type} label={placeholder} variant="outlined" />
        {meta.touched && meta.error && <div className='formik-error'>{meta.error}</div>}
    </FormControl>
    </>
  );
};