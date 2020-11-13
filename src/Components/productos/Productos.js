import React, {useContext, useEffect, useState} from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import ListaDetalles from '../tareas/listaDetalles'; 
import AuthContext from '../../context/authContext';


const Productos = props => {
   
    const authContext =useContext(AuthContext);
    const {rol, valor}=authContext;
    const click=()=>{

        if(valor){
          props.history.push('/nueva-cuenta');
        }
     }
        
    return ( 
        <div className="contenedor-app">
            <Sidebar/>
            <listaDetalles/>
            <div className="seccion-principal">
                <Barra/>
                <div className="campo-form">
                
                
        
                    </div>
             
                <main>
                    

                    <div className="contenedor-tareas">
                   <ListaDetalles/>

                    </div>
                </main>



            </div>


        </div>


     );
    
}
 
export default Productos;
        
        