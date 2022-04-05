import React, { useState, Component } from 'react';
import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import ChatPage from '../../pages/ChatPage';
import {Button} from '@material-ui/core';

function RoomEnter() {

    const location=useLocation()
    const id=location.state
    const [chat,setChat]=useState(false)

    const onChat = () => {
        if(chat===false){
            setChat(true)
        }else {
            setChat(false);
        }
    }

    console.log(`${id}번 방입니다!`)


    return(
        <div>
            <Button>프로젝트 정보</Button>
            <Button>팀별 캘린더</Button>
            <Button>파일공유</Button>
            <Button>화상채팅</Button>
            <Button variant="contained" color="primary" onClick={onChat}>그룹채팅</Button>

            {chat && <ChatPage id={id}/>}
        </div>
    )
}

export default RoomEnter