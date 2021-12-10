import React from 'react'

export const AddChannel = ( { setCreateType, setIsCreating, setIsEditing, setToggleContainer, type }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      height="24px" 
      width="24px" 
      viewBox="0 0 24 24" 
      fill="#000000"
      onClick = {() =>{
        setCreateType(type);
        setIsCreating((prevState) => !prevState);
        setIsEditing(false);
        if(setToggleContainer) setToggleContainer((prevState) => !prevState)
      }}
    >
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
    </svg>
    
)
