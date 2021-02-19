import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import "./PublicationCreator.css"
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import {useStateValue} from "../Backed/Context";
import db from "../Backed/firebase_config";

const PublicationCreator = ({Photo, Name}) => {
    const [inputData, setinputData] = useState("")
    const [{user}, dispatch] = useStateValue()        
    const avatar_img = user.photoURL;      
    const userName = user.displayName;

    function PublishData(){
        alert(inputData)
        //Some Data baseback
/*         db.collection("Posts").add({
            Text: inputData,
            profilePic: avatar_img,
            userName: userName
        })         */
        setinputData("")
    }

    return (
        <div className = "PublicationCreator container_center">
            <div className="PublicationCreator__top flex_center">
                <Avatar src = {avatar_img} className = "avatar"/>                
                <input 
                    type="text"
                    value = {inputData}
                    onChange = {(e)=>setinputData(e.target.value)}
                    placeholder = {`What is in your mind ${Name}?`} 
                    className = "PublicationCreator__input"
                />
                
            </div>
            <div className="PublicationCreator__bottom">
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick = {PublishData}
                    endIcon={<SendIcon/>} 
                    className = "publication_button"                                        
                >
                    Post
                </Button>                      
            </div>
    

        

            
        </div>
    )
}

export default PublicationCreator
