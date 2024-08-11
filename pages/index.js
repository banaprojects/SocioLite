import React, { useContext } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import axios from "axios";


export default function Auth() {
  const {username, secret, setUsername,setSecret}  = useContext(Context)

  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();

    if(username.length === 0 || secret.length === 0) return;

    axios.put(
      'https://api.chatengine.io/users/',
      {username, secret},
      {headers: {"Private-Key": "79aaa839-1e7b-4a16-a780-9a84069ca4df"}}
    )

    .then(() => router.push('/chats'))
  }

  return (

    <div className="background">
      <title>SocioLite</title>
      <div className="description">
        <div className="description-content">
          <h1>SOcioLite</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
          </p>
        </div>
      </div>
      <div className="auth-container">
        <form className="auth-form" onSubmit={e => onSubmit(e)}>
          <h1 className="mobile-logo">SOcioLite</h1>
          <div className="auth-title">LOGIN/REGISTER</div>

          <div className="input-container">
            <input 
            type="text"
            placeholder="Username or Email"
            className="text-input"
            onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input 
            type="password"
            placeholder="Password"
            className="text-input"
            onChange={e => setSecret(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">Start Chatting</button>
        </form>
        {/* <span className="auth-info">Note: If you use a new username, a new account will be created.</span> */}
      </div>
    </div>
      
  );
}
