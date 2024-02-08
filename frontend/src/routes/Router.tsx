
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Transactions from './Transactions';
import Balance from './Balance';
import Delivery from './Delivery';
import Inventory from './Inventory';
import Warehouse from './Warehouse';
import Products from './Products';


export default function Router() {
  const darkMode = useSelector((state: any) => state.darkMode.darkMode);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#121212' : '#F5F5F5'
      },
      text: {
        primary: darkMode ? '#ffffff' : '#000000',
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <BrowserRouter>
              <Routes>
                <Route index path='/' element={<Transactions />}/>
                <Route index path='/balances' element={<Balance />}/>
                <Route index path='/deliveries' element={<Delivery />}/>
                <Route path='/inventories' element={<Inventory />}/>
                <Route path='/warehouses' element={<Warehouse />}/>
                <Route path='/products' element={<Products />}/>
              </Routes>
          </BrowserRouter>
      </ThemeProvider>
    </>
  );
};