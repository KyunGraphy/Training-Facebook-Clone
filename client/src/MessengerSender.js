import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessengerSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessengerSender({ src }) {

const [input, setInput] = useState('');
const [imageURL, setImageURL] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();

    setInput('')
    setImageURL('')
}
  return (
    <div className='messengerSender'>
        <div className='messengerSender_top'>
            <Avatar src={src}/>
            <form>
                <input 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    className='messengerSender_input' 
                    placeholder={`What's on your mind`}
                />
                <input 
                    value={imageURL} 
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='img URL (Optional)'
                />

                <button onClick={handleSubmit} type='submit'>
                    Hidden submit
                </button>
            </form>
        </div>

        <div className='messengerSender_bottom'>
            <div className='messengerSender_option'>
                <VideocamIcon style={{ color: 'red' }} />
                <h3>Live Video</h3>
            </div>
            <div className='messengerSender_option'>
                <PhotoLibraryIcon style={{ color: 'green' }} />
                <h3>Photo/Video</h3>
            </div>
            <div className='messengerSender_option'>
                <InsertEmoticonIcon style={{ color: 'orange' }} />
                <h3>Feeling/Activity</h3>
            </div>
        </div>
    </div>
  )
}

export default MessengerSender