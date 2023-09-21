import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessengerSender from './MessengerSender';
import Post from "./Post";

function Feed() {
  return (
    <div className='feed'>
        {/* Story Reel */}
        <StoryReel />

        {/* Messenger Sender */}
        <MessengerSender
            src='https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/273140864_3124650677818973_1811547904194770955_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MbLaT7sHWMwAX82DA-v&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT8WCBByrnU3xAOMQ8f1duPty9v3lThoF66e954ua7FUGg&oe=62C50DF5'
        />

        {/* Post */}
        <Post 
          profilePic='https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/273140864_3124650677818973_1811547904194770955_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MbLaT7sHWMwAX8Hlmld&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT_k5ptisG88RK83-2a3kswJB2kmZsHrMLLv0AzNKdyrCg&oe=62C70835'
          message='Post caption'
          timestamp='This is a timestamp'
          username='Trung Kien'
          image='https://images.pexels.com/photos/10756534/pexels-photo-10756534.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        />
    </div>
  )
}

export default Feed