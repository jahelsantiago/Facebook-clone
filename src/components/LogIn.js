import React from 'react'
import Button from '@material-ui/core/Button';
import "./Login.css"
const LogIn = () => {
    function login(){
        alert("Hola")
    }
    
    return (
        <div className = "Login_container">
            <div className="logIn">
                <img className = "logo_image" src="https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png" alt=""/>
                <img className = "logo_text" src="https://www.mercurynews.com/wp-content/uploads/2019/11/Facebook_Wordmark_Cycling.gif?w=1020" alt=""/>
                <Button
                    variant="contained"
                    color="primary"                    
                    onClick = {login}
                >
                    Log In
                </Button>
            </div>                        
        </div>
    )
}

export default LogIn
