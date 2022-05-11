import React from 'react'
import {useState} from "react";
import {useEffect} from "react";
import './feed.css'
import CreateIcon from '@material-ui/icons/Create'
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import firebase from 'firebase/compat/app';
import { db } from './firebase';
import {collection, onSnapshot,addDoc, serverTimestamp } from 'firebase/firestore'
import { query, orderBy } from "firebase/firestore";  

function Feed() {
    const [input,setInput]= useState("");
    const [posts,setPosts] = useState([]);
    
    useEffect(()=>{
        const q= query(collection(db,"posts"),orderBy('timestamp','desc'))
        onSnapshot(q,(snapshot)=>{
            setPosts(snapshot.docs.map(doc=>(
                {
                    id:doc.id,
                    data:doc.data()
                }))
            )})      
    },[]);

    const sendPost = e =>{
        e.preventDefault();
        const p =collection(db,"posts")
        addDoc(p,{
            name:"Gisith Jayawardena",
            decription:"This is it",
            message:input,
            photoUrl:'',
            timestamp:serverTimestamp()
        });
       setInput("");     
    };

     
    return (
    <div className='feed'>
     
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon/>
                <form>
                    <input type="text" value={input} onChange= { e=> setInput(e.target.value)}/>
                    <button onClick={sendPost} type="submit">Post</button>
                </form>
            </div>
            <div className="feed_inputOption">
                <InputOption Icon={ImageIcon} title='Photo' 
                color='#7085f9'/>
                <InputOption Icon={SubscriptionIcon} title='Video' 
                color='#e7a33e'/>
                <InputOption Icon={EventNoteIcon} title='Event' 
                color='#c0c8cd'/>
                <InputOption Icon={CalendarViewDayIcon} title='Write article' 
                color='#7fc15e'/>
            </div>                       
        </div>

        {posts.map(({id,data:{name,description,message,
        photoUrl }})=>(
            <Post
                key={id}
                name={name}
                decription={description}
                message={message}
                photoUrl={photoUrl}
                

            />
        ))}               
    </div>
  )
}

export default Feed