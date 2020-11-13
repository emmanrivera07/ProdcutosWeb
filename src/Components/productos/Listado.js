import React, {useContext} from 'react';
import Producto from './Producto';
import AuthContext from '../../context/authContext';
const ListadoProductos = () => {
    const authContext =useContext(AuthContext);
    const {nombreP}=authContext;
    console.log('este es nombrep', nombreP);
      return ( 

        <ul className="listado-proyecto">
            {nombreP && nombreP.map(producto=>
                <Producto
                producto={producto}
                />)}

        </ul>

     );
}
 
export default ListadoProductos;