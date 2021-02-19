import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import StorefrontIcon from '@material-ui/icons/Storefront';
import GroupIcon from '@material-ui/icons/Group';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from "@material-ui/core"
import { IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import "./Header.css";
import {useStateValue} from "../Backed/Context"


const Header = () => {
    const [{user}, dispatch] = useStateValue()
    console.log(user)
    
    const avatar_img = user.photoURL;      
    const user_name = user.displayName.split(" ")[0];

    
    return (
        <div className = "header">            
            {/*Left*/}
            <div className="header__search flex_center">
                <img src="https://iconape.com/wp-content/files/yd/117914/svg/Facebook_f_logo__2019_.svg" alt="" width = "40px" className = "Header_logo"/>
                <div className="header__input flex_center">
                    <SearchIcon className = "SearchIcon"/>                
                    <input type="text" placeholder = "Search Facebook"/>
                </div>                                                
            </div>
            {/*Center*/}
            <div className="header__options flex_center">                
                <div className="header__singularOption active">
                    <HomeIcon fontSize = "large"/>  
                </div>
                <div className="header__singularOption">
                    <LiveTvIcon fontSize = "large"/>                    
                </div>
                <div className="header__singularOption">
                    <StorefrontIcon fontSize = "large"/>   
                </div>
                <div className="header__singularOption">
                    <GroupIcon fontSize = "large"/>    
                </div>
                <div className="header__singularOption">
                    <SportsEsportsIcon fontSize = "large" />
                </div>                                                         
            </div>
            
            {/*Right*/}
            <div className="header__left flex_center">                
                <IconButton>
                    <Avatar alt="Remy Sharp" src = {avatar_img}/>                    
                </IconButton>
                <div className="Name">
                    <h3>{user_name}</h3>  
                </div>
                <IconButton>                    
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>                
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>                  
                
                              
            </div>    
        </div>
        
    )
}

export default Header
