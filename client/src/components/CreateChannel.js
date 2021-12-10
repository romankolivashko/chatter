import React, { useState } from 'react'
import { useChatContext } from 'stream-chat-react';
import { UserList } from '.';
import { CloseCreateChannel } from '../assets/CloseCreateChannel';


const ChannelNameInput = () => {
  const [channelName, setChannelName] = useState('')

  const handleChange = ( e ) => {
    e.preventDefault();

    setChannelName(e.target.value);
  }

  return (
    <div className="channel-name-input__wrapper">
      <p>Name</p>
      <input value={channelName} onChange={handleChange} placeholder="channel-name" />
      <p>Add Members</p>
    </div>
  )
}


const CreateChannel = ({createType, setIsCreating }) => {
  const [channelName, setChannelName] = useState('')
  return (
    <div className="create-channel__conatinaer">
      <div className="create-channel__header">
        <p>{createType === 'team' ? 'Create a New Channel' : 'Send a Direct Message'}
        </p>
        <CloseCreateChannel setIsCreating={setIsCreating} />
      </div>
      {createType === 'team' && <ChannelNameInput channelName={channelName} setChannelName={setChannelName} />}
      <UserList />
      {/* <ChannelNameInput /> */}
    </div>
  )
}

export default CreateChannel
