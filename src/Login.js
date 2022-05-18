import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css'

function Login() {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [profilePic,setProfilePic]=useState("");
    const dispatch = useDispatch();

    const register =() =>{
        if(!name){
            return alert("Please enter a full name!");
        }
        createUserWithEmailAndPassword(auth,email,password)
        .then((userAuth)=>{
            updateProfile(userAuth.user,{
                displayName: name,
                photoURL:profilePic
            })
            .then(() => {
                dispatch(
                    login({
                    email: userAuth.user.email,
                    uid : userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic
                })
                );
            });
        }).catch(error => alert(error));       
    };

    const loginToApp =(e)=>{
        e.preventDefault();
        if(!email){
            return alert("Please enter your email!");
        }
        signInWithEmailAndPassword(auth,email,password)
        .then((userAuth) => {
            dispatch(
                login({
                    email: userAuth.user.email,
                    uid : userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoURL
                })
            )
        }).catch(error => alert(error))
       
    }
  return (
    <div className='login'>
        <div className="login_container">
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png" alt="" />
            <form>
                <input type="text" placeholder='Full Name(required if registering)' value={name} onChange={(e) =>setName(e.target.value)} />
                <input type="text" placeholder='Profile pic URL(optional)' value={profilePic} onChange={(e) =>setProfilePic(e.target.value)}/>
                <input type="text" placeholder='Email' value={email} onChange={(e) =>setEmail(e.target.value)}/>
                <input type="password" placeholder='Password' value={password} onChange={(e) =>setPassword(e.target.value)}/>
                <button type='submit' onClick={loginToApp}>Sign in</button>
                
            </form>
            <p>Not a member?
                    <span className='login_register' onClick={register}>Register now</span>
            </p>
        </div>
    </div>
  )
}

export default Login