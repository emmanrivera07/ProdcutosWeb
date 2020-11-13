import React, {useEffect, useState} from 'react';

import AuthContext from './authContext';
import clienteAxios from '../config/axios';
import axios from 'axios';
const AuthState=props=>{

    
   
    const[respuesta, setRespuesta]=useState(null);
    const[resultadoU, setResultadoU]=useState(null);
    const [ errorMs,setErrorMs] = useState(null);
    const [ errorAuth,setErrorAuth] = useState(false);
    const [token1, setToken]=useState(null);
    const[nombreU, setNombreU]=useState(null);
    const[nombreP, setNombreP]=useState([]);
    const[rol, setRol]=useState(null);
    const [correoErrorM, setCorreoErrorM]=useState(false);
    const [valCorreoError, setvalCorreoError]=useState(false);

    useEffect(()=>{
        obtenerProductos();
    }, []);

   
   
    const [formulario, guardarformulario]=useState(false);

    const productoNuevo=async datos=>{
        try{
            const formData = new FormData();
                for(var item in datos) {
                    formData.append(item, datos[item]);
                }
                const respuesta = await fetch(`${process.env.REACT_APP_BACKEND_URL}/producto`, {
                    method: 'POST',
                    body: JSON.stringify({...datos}),
                    headers: {
                        'Content-Type': 'application/json',
                        'Token': `${sessionStorage.getItem('token')}`,
                    },
                });
                nombreP.push(respuesta.data.producto);
                setNombreP(nombreP);
                console.log('Respuesta: ', respuesta);
                const data = await respuesta.json();
                console.log('Datos: ', data);
            } 
            catch(error){
                console.log("Error: ", error);
            }
    }

  sessionStorage.setItem('token', token1);
    console.log('token de prueba',localStorage.getItem('token'));

    axios.create({

    });
    const iniciarSesion=async datos=>{
      
    
    console.log('desde post', sessionStorage.getItem('token'));
      
        try{
            const respuesta=await clienteAxios.post('/login', datos);
            
            console.log(respuesta);
            
            setRespuesta(respuesta.data.ok);
            setToken(respuesta.data.token);
            setNombreU(respuesta.data.usuario.nombre);
            setRol(respuesta.data.usuario.role);
            
            console.log('token desde aut', sessionStorage.getItem('token'));
        }
        
        catch(error){
            
            setErrorMs(error.response.data.err.message);
            setErrorAuth(error);
            
           
            
        }
 
    } 
       const registrarUsuario=async datos=>{
            try{
                const respuesta=await clienteAxios.post('/usuario', datos);
                console.log('Respuesta: ', respuesta);
                
                
                
                setResultadoU(respuesta.data.ok);
                //setCorreoError(data.err.erros.email.message);
                
                
              
            } 
            catch(error){
                setvalCorreoError(error);
                //setCorreoErrorM(error.response.data.err.erros.properties.message);
                console.log("Error: ", error.response);
            }
        }
        console.log('resultado de registrar', resultadoU);
console.log('setval', valCorreoError);
        console.log('esto son los pro', nombreP);
        const obtenerProductos=async()=>{
            try{
                const resultado=await clienteAxios.get('/productos');
                console.log(resultado);
                setNombreP(resultado.data.productos);
            }
            catch(error){
                console.log(error.response);
            }
        }

        const eliminarProducto=async _id=>{
            try{
                const formData = new FormData();
                for(var item in _id) {
                    formData.append(item, _id[item]);
                }
                const respuesta = await fetch(`${process.env.REACT_APP_BACKEND_URL}/producto/${_id}`, {
                    method: 'DELETE',
                    body: JSON.stringify({..._id}),
                    headers: {
                        'Content-Type': 'application/json',
                        'Token': `${sessionStorage.getItem('token')}`,
                    },
                });
                console.log('Respuesta: ', respuesta);
                const data = await respuesta.json();
                console.log('Datos: ', data);
            } 
            catch(error){
                console.log("Error: ", error);
            }
        }
    
    return(

        <AuthContext.Provider
            value={{
                iniciarSesion,
                respuesta,
                errorAuth,
                errorMs,
                setErrorAuth,
                nombreU, 
                rol,
                
                registrarUsuario,
                formulario,
            guardarformulario,
            productoNuevo,
            nombreP,
            eliminarProducto,
            resultadoU,
            correoErrorM,
            setCorreoErrorM,
            valCorreoError,
            setvalCorreoError
            
            }}>
                {props.children}
        </AuthContext.Provider>

            

            
      
    

    )
}

export default AuthState;