import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
  return (
    <div className="header">
        <div className="header_left">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
            
            <div className="header_search">
                <SearchIcon />
                <input type="text" />
            </div>
            
        </div>

        <div className="header_right">
       
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption Icon={BusinessCenterIcon} title = "Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Message"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C5603AQGas992xr6W1w/profile-displayphoto-shrink_800_800/0/1615791510357?e=1657756800&v=beta&t=U8JNex3sL8AJRYkPzO80jidYJfPPMNXZQkjwPODGTqA" title="me"/>
        </div>
    </div>
  )
}

export default Header