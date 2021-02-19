import React, { useEffect, useState } from 'react'
import Publication from './Publication';
import PublicationCreator from "./PublicationCreator.js"
import db from "../Backed/firebase_config"

const PublicationsPanel = () => {
    const [posts, setposts] = useState([])

    //get data from de DB and asign it to posts
    useEffect(() => {
        db.collection("Posts").onSnapshot((snapshot)=>{
            var temp_posts = []
            snapshot.forEach((doc)=>{
                temp_posts.push({id : doc.id, data : doc.data()})
                
            })
            setposts(temp_posts)
        })    
    }, [])
    
    
    return (
        <div>
            <PublicationCreator/>
            
            {/* create a map to iterate trought every element and render */}
            {posts.map( (post) => (                 
                 <Publication 
                    key = {post.id}
                    Photo = {post.data.profilePic}
                    Owner = {post.data.userName} 
                    Text = {post.data.Text}
                />
                ))
            }
            {console.log("publications creator work")}            
            <Publication
                Owner = "Jahel"
                Text = "lorem ipsu facto terci derma preto di maria"
            />
        </div>
    )
}

export default PublicationsPanel
