
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Navbar from '../components/default/Navbar';
import ILayoutProps from '../types/layout.types';


export default function ExternalTabLayout({ children }: ILayoutProps) {

  const tabRoutes = [
    { value: 1, path: '/', label: 'In- och utleveranser' },
    { value: 2, path: '/balances', label: 'Ingående lagersaldo' },
    { value: 3, path: '/deliveries', label: 'Skapa leverans' },
  ];
  
  return (
    <>
      <Navbar />
        <h3>
          <Grid container justifyContent={"center"} spacing={1}>
            <Grid item><Typography color="text.primary"><SwapVerticalCircleIcon /></Typography></Grid>
            <Grid item><Typography color="text.primary">In- och utleveranser</Typography></Grid>
          </Grid>
        </h3>
          <Tabs centered>
            {tabRoutes.map((tab) => (
              <Tab key={tab.value} value={tab.value} label={tab.label} component={Link} to={tab.path} />
            ))}
          </Tabs>
          <main>{children}</main>
    </>
  );
};