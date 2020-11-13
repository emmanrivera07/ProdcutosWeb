import {MOSTRAR_ALERTA, OCULATAR_ALERTA} from '../../types';


export  default (state, action)=>{

    switch (action.type){

        case MOSTRAR_ALERTA:
            return{
                alerta: action.payload
            }
        case OCULATAR_ALERTA:
            return {
                alerta: null
            }  

        default:
            return state;
    }
}




