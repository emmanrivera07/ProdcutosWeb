import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import clienteAxios from '../../config/axios';
import styled from '@emotion/styled';
import AuthContext from '../../context/authContext'; 
const NuevaCuenta = props => {

    const authContext =useContext(AuthContext);
    const {registrarUsuario, resultadoU,  correoError, correoErrorM, valCorreoError, setvalCorreoError}=authContext;
   
    console.log('token desde nueva cuenta', sessionStorage.getItem('token'));
    const [usuario, guardarUsuario]=useState({

        nombre: '',
        email:'',
        password: '',
        confirmar: '',
        role:''
    });

    const {nombre, email, password, confirmar, role}=usuario;

    const onChange=e=>{
        guardarUsuario({
            ...usuario,
            [e.target.name]:e.target.value
        }) 

    }

    const [errorCamposVacios, guardarErrrorCamposVacios]=useState(false);
    const [errorPassword, guardarPassword]=useState(false);
    const [errorPasswordLength, guardarPasswordLength]=useState(false);
    const [respuesta, guardarRespuesta]=useState(true);
    const onSubmit=e=>{

        e.preventDefault();

        if(nombre.trim()===''||
            email.trim()===''||
            password.trim()===''||
            confirmar.trim()===''){
                guardarErrrorCamposVacios(true);

                return;
            
            }

            guardarErrrorCamposVacios(false);
            
         if(password!==confirmar){
            guardarPassword(true);
            return;
            
        }
            guardarPassword(false);

        if(password.length<6){
            guardarPasswordLength(true);
            return;
        }

        guardarPasswordLength(false);
        console.log('correoerror', valCorreoError);
        if(valCorreoError){
            setvalCorreoError(true);
            
            console.log('error desde nueva',correoError);
        }
        setvalCorreoError(false);
  
        registrarUsuario({
            nombre, 
            email, 
            password,
            role
        });

    
    }


 

    
    const InicioSesion=styled.div`

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
   
   const Exito=styled.div`

       background-color: green;
       color:white;
       padding: 1rem;
       width: 100%;
       text-align: center; 
       margin-bottom:30px;
    `;


   
    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear cuenta</h1>
                <form
                    onSubmit={onSubmit}
                >
                    {errorCamposVacios ? <Error>Todos los campos son obligatorios</Error> :null}
                    {errorPassword ? <Error>Las Password deben ser iguales</Error> :null}
                    {errorPasswordLength ? <Error>Las Password deben de tener más de 6 caracteres</Error> :null}
                    {resultadoU?<Exito>El usuario ha sido guardado con éxito</Exito>:null}
                    {valCorreoError?<Error>El correo deber ser único</Error>:null}
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                       
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={nombre}
                            placeholder="Ingresar nombre"
                            onChange={onChange}
                        
                        />

                    </div>
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
                        <label htmlFor="confrimar-password">Repite tu password</label>
                        <input
                       
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            value={confirmar}
                            placeholder="Confirmar password"
                            onChange={onChange}
                        
                        />

                    </div>

                    <div className="campo-form">
                        <label htmlFor="confrimar-password">Rol</label>
                        <input
                       
                            type="text"
                            id="role"
                            name="role"
                            value={role}
                            placeholder="Rol"
                            onChange={onChange}
                        
                        />

                    </div>
                    
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                        />
                    </div>

                    <InicioSesion>
                    <a href="/">Iniciar Sesión</a>
                    </InicioSesion>
                </form>
                <div>

               
                </div>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;