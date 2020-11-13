import React, {Fragment, useContext} from 'react';
import Detalles from './Detalles';
import AuthContext from '../../context/authContext';

const ListaDetalles = () => {
    const authContext =useContext(AuthContext);
    const {nombreP}=authContext;
    console.log("nombrep", nombreP);
    
    return ( 
        <Fragment>
            <h2>Productos</h2>
            <ul className="listado-productos">
                
                {nombreP && nombreP.map(producto=>(
                    <Detalles
                    producto={producto}
                    />
                ))}
            

            </ul>
        </Fragment>
     );
}
 
export default ListaDetalles;