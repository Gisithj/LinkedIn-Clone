import React from 'react'
import './sidebar.css'
import { Avatar } from '@mui/material'
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {

    const user = useSelector(selectUser);

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
            <Avatar className='sidebar_avatar' src={user.photoUrl}>{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
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