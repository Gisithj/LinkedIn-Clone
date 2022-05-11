import React from 'react'
import './sidebar.css'
import { Avatar, requirePropFactory } from '@mui/material'

function Sidebar() {

    const recentItem = (topic)=>(
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    );

  return (
    <div className='sidebar'>
        
        <div className="sidebar_top">
            <img src={require('./images/gg.JPG')} alt=''/>
            <Avatar className='sidebar_avatar' src="https://media-exp1.licdn.com/dms/image/C5603AQGas992xr6W1w/profile-displayphoto-shrink_800_800/0/1615791510357?e=1657756800&v=beta&t=U8JNex3sL8AJRYkPzO80jidYJfPPMNXZQkjwPODGTqA"/>
            <h2>Gisith Jayawardena</h2>
            <h4>gisithj.com</h4>
        </div>

        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className='sidebar_statNumber'>2546</p>
            </div>
            <div className="sidebar_stat">
                <p>Views on post</p>
                <p className='sidebar_statNumber'>2546</p>
            </div>
        </div>

        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem('ReactJs')}
            {recentItem("NodeJs")}
            {recentItem("Java")}
            {recentItem("Python")}
            {recentItem("C")}
            {recentItem("C#")}
        </div>
    </div>
  );
}

export default Sidebar