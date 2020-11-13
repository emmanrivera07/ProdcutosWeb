import React from 'react';

const Producto = ({producto}) => {
    return (  


        <li>
            <button
            
                type="button"
                className="btn btn-blank"
            >{producto.nombre}

            </button>
        </li>
    );
}
 
export default Producto;


