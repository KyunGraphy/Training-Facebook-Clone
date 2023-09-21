import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Header() {
  return (
    <div className='header'>
        <div className='header_left'>
            <img
                src='https://png.pngtree.com/png-clipart/20190918/ourlarge/pngtree-facebook-logo-with-earth-png-image_1740756.jpg'
                alt=''
            />

            <div className='header_input'>
                <SearchIcon />
                <input type='text' placeholder='Search...'/>
            </div>
        </div>

        
        <div className='header_center'>
            <div className='header_option header_option--active'>
                <HomeIcon fontSize='large' />
            </div>
            <div className='header_option'>
                <FlagIcon fontSize='large' />
            </div>
            <div className='header_option'>
                <SubscriptionsOutlinedIcon fontSize='large' />
            </div>
            <div className='header_option'>
                <StorefrontOutlinedIcon fontSize='large' />
            </div>
            <div className='header_option'>
                <SupervisedUserCircleIcon fontSize='large' />
            </div>
        </div>

        <div className='header_right'>
            <div className='header_info'>
                <Avatar 
                    src='https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/273140864_3124650677818973_1811547904194770955_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MbLaT7sHWMwAX82DA-v&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT8WCBByrnU3xAOMQ8f1duPty9v3lThoF66e954ua7FUGg&oe=62C50DF5'
                />
                <h4>Kyun</h4>
            </div>

            <IconButton>
                <AddIcon />
            </IconButton>
            <IconButton>
                <ForumIcon />
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon />
            </IconButton>
            <IconButton>
                <ExpandMoreIcon />
            </IconButton>
        </div>
    </div>
  )
}

export default Header