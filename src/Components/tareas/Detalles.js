import React, {useState, useContext} from 'react';
import AuthContext from '../../context/authContext';

function Detalles({producto}) {
    const authContext =useContext(AuthContext);
    const {eliminarProducto}=authContext;

    const [id, guardarId]=useState({

        _id:producto._id
    });

    

    const handleDelete = id => {
        eliminarProducto(id);
       }
    

    return (
        <li className="producto sombra">
            

            <div className="estado">
                <p>Nombre: {producto.nombre}</p>
                <p>Precio: {producto.precioUni}</p>
                <p>Descripcion: {producto.descripcion}</p>
                <p>Categoria: {producto.categoria.descripcion}</p>
                
                <button
                    type="button"
                    className="btn btn-primario"
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => handleDelete(producto._id)}
                >
                    Eliminar
                </button>
            </div>
            

                
            

        </li>
    )
}

export default Detalles
