import React, {useState, useContext, useEffect} from 'react';
import NuevoProducto from '../productos/NuevoProducto';
import ListadoProductos from '../productos/Listado';
import ListaDetalles from '../tareas/listaDetalles';

import styled from '@emotion/styled';

const Sidebar = props => {

    

    const [formulario, guardarformulario]=useState(false);
    const [productos, guardarProductos]=useState(false);

    const onclick=()=>{
        guardarProductos(true);
    }

    const click=()=>{
    
        guardarformulario(true);
    
  
}
    const NuevaCuenta=styled.div`

    

    text-align:center;
    margin-top:150px;

    `;

    
    return ( 

        <aside>

            <h1>Productos</h1>
            
            <button
            
                    type="button"
                    className="btn btn-block btn-primario"
                    onClick={click}
                    >Nuevo Producto
                      {formulario
            ? (<NuevoProducto/>)
            :null}
                
               
            </button>
 
            
            
        </aside>
        
     );
}
 
export default Sidebar;