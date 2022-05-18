import React from 'react'
import './HeaderOption.css'
import {Avatar} from "@material-ui/core"
import { useSelector } from "react-redux";
import { selectUser } from './features/userSlice'

function HeaderOption({avatar,Icon,title,onClick}) {

  const user = useSelector(selectUser)

  let avatar_content=""
  let avatar_src=""
  if(user!=null){
    if( user.photoUrl !=null){
      avatar_src=user.photoUrl
    }else{
      avatar_content = user.email[0];
    }  
    
  }
  return (
    <div className="headerOption" onClick={onClick}>
        {Icon && <Icon className='headerOption_icon'/>}
        {avatar && 
         ( <Avatar className="headerOption_icon" src={avatar_src}>{avatar_content}</Avatar>)
        }
        <h3 className='headerOptionTitle'>{title}</h3>
        
    </div>
  )
}

export default HeaderOption