import axios from 'axios';

import iconError from '../images/error.png';
import iconSuccess from '../images/try.png';
import iconDisconnect from '../images/disconnect.png';
import { toastError, toastSucess, toastDisconnect } from '../toasts/Toasts';


const api = axios.create({baseURL: "http://localhost:3003/api"});


api.interceptors.request.use(async config => {
    const token = localStorage.getItem("authenticationUsers");
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})

api.interceptors.response.use(
   function(response){
       if(response.data.token && response.data.ongs){
            toastSucess("Registrando Ong...", iconSuccess)
       }

       if(response.data.register){
            toastSucess("Cadastrado realizado!", iconSuccess)
       }
       
       if(response.data.auth){
            toastSucess("Entrando...", iconSuccess)
       }
    
        return response;
        
   },

   function(err){
        if(err.response.data.error){
           return toastError(err.response.data.error, iconError)
        }

        if(err.response.data.searchError){
            return toastError(err.response.data.searchError, iconError)
        }

        if(err.response.data.tokenError){
             localStorage.removeItem("authenticationUsers");
             localStorage.removeItem("userId");
             toastDisconnect("Você foi desconectado", iconDisconnect)
             setTimeout(() => {
                  return window.location.reload();
             },2500)
             
             
        }
   }
)

export default api;