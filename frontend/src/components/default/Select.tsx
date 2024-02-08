
import { useField, FieldHookConfig } from 'formik';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MUISelect, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { ICustomSelectProps } from '../../types/form.types';


export default function Select({ label, options, ...props }: ICustomSelectProps & FieldHookConfig<string>) {

  const [field, meta, helpers] = useField(props);

  const handleChange = (event: SelectChangeEvent<string>): void => {
    const option = String(event.target.value);
    helpers.setValue(option);
  };

  return (
    <FormControl className='formik-component'>
      <InputLabel htmlFor={props.name}>{label}</InputLabel>
        <MUISelect id={props.name} name={field.name} value={field.value} onChange={handleChange}>
          {options.map(({ id, name }) => (
            <MenuItem key={id} value={id}>{name}</MenuItem>
          ))}
        </MUISelect>
        {meta.touched && meta.error && <div className='formik-error'>{meta.error}</div>}
    </FormControl>
  );
};