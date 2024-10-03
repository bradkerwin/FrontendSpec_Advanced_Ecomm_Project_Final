import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import CustomerList from './Components/Customers';
import NewCustomer from './Components/NewCustomer';
import NavigationBar from './Components/NavBar';
import ProductList from './Components/Products';
import NewProduct from './Components/NewProducts';
import HomePage from './Components/Homepage';
import OrdersList from './Components/Orders';
import NewOrder from './Components/NewOrder';
import Cart from './Components/Cart';
import SignIn from './Components/SignIn';

function App() {
  const user = useSelector( (state) => state.user.user)

  return (
    <>
    {user ? <NavigationBar/> : ""}
    <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/homepage' element={<HomePage /> } />
        <Route path='/customers' element={<CustomerList /> } />
        <Route path='/newcustomer' element={<NewCustomer /> } />
        <Route path='/products' element={<ProductList /> } />
        <Route path='/newproduct' element={<NewProduct /> } />
        <Route path='/orders' element={<OrdersList /> } />
        <Route path='/neworder' element={<NewOrder /> } />
        <Route path='/cart' element={<Cart /> } />
    </Routes>
    </>
  )
};

export default App;
