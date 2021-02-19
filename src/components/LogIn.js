import React from 'react'
import Button from '@material-ui/core/Button';
import "./Login.css"
import {actionTypes} from "../Backed/Reducer"
import {useStateValue} from "../Backed/Context"
import {auth, provider} from "../Backed/firebase_config"

const LogIn = () => {     
    const [state, dispatch] = useStateValue();

    function Autenticate(){        
        auth.signInWithPopup(provider)
        .then((res)=>{
            //lo que se debe hacer con la fucnion cuando se retorno el usuario            
            dispatch({
                type : actionTypes.SET_USER,
                user : res.user,
            })
            
        })
        .catch((e)=>{
            console.log(e)
        })
    } 
    
    return (
        <div className = "Login_container">
            <div className="logIn">
                <img className = "logo_image" src="https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png" alt=""/>
                <img className = "logo_text" src="https://www.mercurynews.com/wp-content/uploads/2019/11/Facebook_Wordmark_Cycling.gif?w=1020" alt=""/>
                <Button
                    variant="contained"
                    color="primary"                    
                    onClick = {Autenticate}
                >
                    Log In
                </Button>
            </div>                        
        </div>
    )
}

export default LogIn
