
import { Provider } from 'react-redux';
import './App.css';
import Router from './routes/Router';
import store from './app/store';


export default function App() {
  return (
    <>
    <Provider store={store}>
      <Router />
    </Provider>
    </>
  );
};