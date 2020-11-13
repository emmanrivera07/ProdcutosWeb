import React, {useContext, useState, useEffect} from 'react';
import listaDetalles from '../tareas/listaDetalles';
import styled from '@emotion/styled';
import AuthContext from '../../context/authContext';

const Login = (props) => {
    

    const authContext =useContext(AuthContext);
    const {respuesta, errorAuth, errorMs,setErrorAuth, token1, iniciarSesion}=authContext;

    console.log('este es guardartoken:', sessionStorage.getItem('token'));
    const [usuario, guardarUsuario]=useState({

        email:'',
        password: ''
    });

    const [errorCamposVacios, guardarErrrorCamposVacios]=useState(false);

    const {email, password}=usuario;

    const onChange=e=>{
        guardarUsuario({
            ...usuario,
            [e.target.name]:e.target.value
        }) 

    }
    const onSubmit=e=>{

        e.preventDefault();
        
        if(email.trim()===''||password.trim()===''){
            guardarErrrorCamposVacios(true);

            return;
        }
     

        guardarErrrorCamposVacios(false);

        if(errorAuth){
            setErrorAuth(true);
        }

        setErrorAuth(false);
        iniciarSesion({email, password});

        
    }

    useEffect(()=>{
        if(respuesta){
            props.history.push('/productos');
        }
    })
  

    const NuevaCuenta=styled.div`

    text-align:center;

    `;

    const Error =styled.div`

       background-color: red;
       color:white;
       padding: 1rem;
       width: 100%;
       text-align: center; 
       margin-bottom:30px;
    `;
    return ( 
       
            <div className="form-usuario">
            
            <div className="contenedor-form sombra-dark">
                
                <h1>Iniciar Sesión</h1>
                <form
                    onSubmit={onSubmit}
                >
                    {errorCamposVacios ? <Error>Todos los campos son obligatorios</Error> :null}
    {errorAuth? <Error>{errorMs}</Error>: null}

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Ingresar email"
                            onChange={onChange}
                        
                        />

                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Ingresar password"
                            onChange={onChange}
                        
                        />

                    </div>
                    
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"
                        />
                        
                    </div>
                </form>

                    
                
            </div>
        </div>
       
     );
}
 
export default Login;