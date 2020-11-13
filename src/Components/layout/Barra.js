import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/authContext';
import styled from '@emotion/styled';

const Barra = (props) => {
    const authContext =useContext(AuthContext);
    const {nombreU, rol, valor}=authContext;
    console.log('token desde barra', sessionStorage.getItem('token'));
    const Cerrar=styled.a`
    float: right;
       text-align: right;
       padding-left: 400px;
    `;

    const Pa=styled.p`
    float: right;
       text-align: right;

    `;

    


    return (

        <header className="app-header">

            <p className="nombre-usuario">Bienvenido, <span>{nombreU}</span></p>

                <nav className="nav-principal">
                    <a href="/">Cerrar Sesión</a>
                   {rol==='ADMIN_ROLE'?
                   (
                    <a href="/nueva-cuenta">Crear nuevo usuario</a>
                 
                   ):null
                   }
                
                   
                    
                </nav>

            
        </header>
      );
}
 
export default Barra

