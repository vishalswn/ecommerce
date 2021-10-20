
import './App.css';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from "./pages/Home";
import Product from "./pages/product";
import ProductList from './pages/productList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
function App() {

  const user = false;

  return (
    // <Home/>
    // <Product/>
    // <Register/>
    // <ProductList/>
    // <Login/>

    // <Cart/>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/products/:category">
          <ProductList/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/"/>: <Login/ > }
        </Route>
        <Route path="/register">
        {user ? <Redirect to="/"/>: <Register/ > }
        </Route>
        <Route path="/pr">
          <Product/>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
