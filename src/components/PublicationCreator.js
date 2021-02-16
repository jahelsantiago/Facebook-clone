import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import "./PublicationCreator.css"
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const PublicationCreator = ({Photo, Name}) => {
    const [inputData, setinputData] = useState("")
    
    function PublishData(){
        alert(inputData)
        //Some Data base back

        setinputData("")
    }

    return (
        <div className = "PublicationCreator container_center">
            <div className="PublicationCreator__top flex_center">
                <Avatar src = {Photo} className = "avatar"/>                
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
