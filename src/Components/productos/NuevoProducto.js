import React, { useState, useContext} from 'react';
import styled from '@emotion/styled';
import AuthContext from '../../context/authContext';

const NuevoProducto = () => {

    const productoContext =useContext(AuthContext);
    const {productoNuevo}=productoContext;

    const [producto, setProducto]=useState({
        nombre: '',
        precioUni: '',
        descripcion:'', 
        categoria: ''
    });

    const {nombre, precioUni, descripcion, categoria}=producto;
    const [errorCamposVacios, guardarErrrorCamposVacios]=useState(false);
    const [errorPrecio, guardarPrecio]=useState(false);

    const onChange =e=>{
        setProducto({
            ...producto,
            [e.target.name]:e.target.value
        })
    }
    const handleSave=e=>{

        e.preventDefault();
        if(nombre.trim()===''||precioUni.trim()===''||descripcion.trim()===''||categoria.trim()===''){
            guardarErrrorCamposVacios(true);

            return;
        }
        guardarErrrorCamposVacios(false);

        if(precioUni<=0){
            guardarPrecio(true);
            return;

        }
        guardarPrecio(false);
        productoNuevo({nombre, precioUni, descripcion, categoria});

    }
    const Error =styled.div`

       background-color: red;
       color:white;
       padding: 1rem;
       width: 100%;
       text-align: center; 
       margin-bottom:30px;
    `;
    

    return (  


        <>

                    <div className="formulario">
                    <form className="formulario-nuevo-producto">
                                {errorCamposVacios ? <Error>Todos los campos son obligatorios</Error> :null}
                                {errorPrecio ? <Error>El precio tiene que ser mayor a 0</Error> :null}

                        <input
                            type="text"
                            className="input-text"
                            placeholder="Nombre producto"
                            name="nombre"
                            value={nombre}
                            onChange={onChange}
       
                        
                        />
                        <input
                            type="number"
                            className="input-text"
                            placeholder="Precio"
                            name="precioUni"
                            value={precioUni}
                            onChange={onChange}
 
                        />
        
                        <input
                            type="text"
                            className="input-text"
                            placeholder="Descripcion"
                            name="descripcion"
                            value={descripcion}
                            onChange={onChange}
            
                        />
                        <input
                            type="text"
                            className="input-text"
                            placeholder="Categoría"
                            name="categoria"
                            value={categoria}
                            onChange={onChange}
            
                        />
                        <input
                        
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar producto"
                            
                            />
                        <button
                            className="btn btn-primario btn-block"
                            onClick={handleSave}
                        >
                            Agregar producto
                        </button>
        
                    </form>
                </div> 
               
        
           
            
        </>
    );
}
 
export default NuevoProducto;