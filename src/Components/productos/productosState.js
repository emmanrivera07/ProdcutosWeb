import React, { useState } from 'react';
import productoContext from './productosContext';
import clienteAxios from '../../config/axios';
const ProductosState = props => {

    const [formulario, guardarformulario]=useState(false);

    const productoNuevo=async datos=>{
        try{
            const respuesta=await clienteAxios.post('/producto', datos);
            console.log(respuesta);
        }
        catch(error){
            console.log(error.response);
        }
    }
    return (
        <productoContext.Provider
        value={{

            formulario,
            guardarformulario,
            productoNuevo
        }}
        
        >{props.children}

        </productoContext.Provider>
    );
}

export default ProductosState;
