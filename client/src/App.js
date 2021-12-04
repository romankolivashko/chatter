import React from 'react'
import { StreamChat } from 'stream-chat';
import { ChannelList, Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

// import ChannelContainer from './components/ChannelContainer';
// import ChannelListContainer from './components/ChannelListContainer';

import { ChannelListContainer, ChannelContainer, Auth } from './components';

import './App.css';

const apiKey = process.env.REACT_APP_API_KEY;

const client = StreamChat.getInstance(apiKey);

const authToken = false;

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
