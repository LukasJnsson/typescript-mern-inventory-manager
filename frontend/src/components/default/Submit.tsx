
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { ICustomSubmitProps } from '../../types/form.types';


export default function Submit({ label }: ICustomSubmitProps) {
  return (
    <FormControl className='formik-component'>
      <Button type='submit' variant="outlined" sx={{
          color: 'inherit',
          borderColor: 'rgba(255, 255, 255, 0.3)',
          '&:hover': {
            borderColor: 'white'
          },
        }}
      >{label}</Button>
    </FormControl>
  );
};