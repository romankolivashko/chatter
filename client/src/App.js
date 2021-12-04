import React from 'react'
import { StreamChat } from 'stream-chat';
import { ChannelList, Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

// import ChannelContainer from './components/ChannelContainer';
// import ChannelListContainer from './components/ChannelListContainer';

import { ChannelListContainer, ChannelContainer, Auth } from './components';
import './App.css';

require("dotenv").config();

const cookies = new Cookies();

//const apiKey = process.env.REACT_APP_API_KEY;

const authToken = cookies.get("token");
//const client = StreamChat.getInstance(apiKey);
const client = StreamChat.getInstance(apiKey);


if(authToken){
  client.connectUser({
    id: cookies.get('userId'),
    name: cookies.get('username'),
    fullName: cookies.get('fullName'),
    image: cookies.get('avatarURL'),
    hashedPassword: cookies.get('hashedPassword'),
    phoneNumber: cookies.get('phoneNumber'),
  }, authToken)
}



const App = () => {

  if(!authToken) return <Auth />

  return (
    <div className="app-wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer
        
        />

        <ChannelContainer
        
        />
      </Chat>
    </div>
  )
}

export default App
