import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Components/auth/Login';
import NuevaCuenta from './Components/auth/NuevaCuenta';
import Productos from './Components/productos/Productos';
import ProductoState from './Components/productos/productosState';
import AuthState from './context/authState';

function App() {

console.log(process.env.REACT_APP_BACKEND_URL);

  return (
    

      

        <ProductoState>
          <AuthState>
          <Router>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
            <Route exact path="/productos" component={Productos}/>
        </Switch>
    </Router>
        </AuthState>
        </ProductoState>
    
  
    
  );
}

export default App;
