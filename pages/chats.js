import React, { useContext, useState, useEffect} from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const ChatEngine  = dynamic (() =>
    import("react-chat-engine").then((module) => module.ChatEngine)
);

const MessageFormSocial  = dynamic(() => 
    import("react-chat-engine").then((module) => module.MessageFormSocial)
);


export default function Chats() {
    const {username, secret } = useContext(Context); 
    const [ showChat, setShowChat ] = useState(false); 
    const router = useRouter();

    useEffect(() => {
        if(typeof document != null){
           setShowChat(true)     
        }
    }, [])

    useEffect(() => {
        if(username.length === 0 || secret.length === 0) router.push('/')
    })

    if(!showChat) return <div />;

    return(
        <div>
            <title>SocioLite | Messages</title>
            <nav>
                <div className="logo"><span className="logo front-logo">SOcio</span>Lite</div>
                <button className="logout" onClick={() => router.push('/')} >Logout</button>
            </nav>
           <div className="shadow">
                <ChatEngine 
                   height='100vh'
                   width='100vw'
                   projectID = '0dfad7a3-1cb3-461f-8acc-98f2f21fc7a4'
                   userName = {username}
                   userSecret = {secret}
                   renderNewMessageForm = {() => <MessageFormSocial />}
                />
            </div>  
        </div>
    )
}