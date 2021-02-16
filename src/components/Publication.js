import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Publication.css"

const Publication = ({Photo, Owner, Text}) => {
    return (
        <div className = "publication container_center">
            {/*Top*/}
            <div className="publication__header">
                <Avatar src = {Photo} className = "avatar"/>                   
                <h3>{Owner}</h3>
            </div>
            {/*Bottom*/}
            <div className="publication__bottom">
                <p>{Text}</p> 
            </div>                        
        </div>
    )
}

export default Publication
