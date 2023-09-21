import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons'

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow 
            src='https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/273140864_3124650677818973_1811547904194770955_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MbLaT7sHWMwAX82DA-v&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT8WCBByrnU3xAOMQ8f1duPty9v3lThoF66e954ua7FUGg&oe=62C50DF5'
            title='Trung Kien'
        />
        <SidebarRow 
            Icon={LocalHospitalIcon}
            title='Covid 19 Information Center'
        />
        <SidebarRow 
            Icon={EmojiFlagsIcon}
            title='Pages'
        />
        <SidebarRow 
            Icon={PeopleIcon}
            title='Friends'
        />
        <SidebarRow 
            Icon={ChatIcon}
            title='Messenger'
        />
        <SidebarRow 
            Icon={StorefrontIcon}
            title='Marketplace'
        />
        <SidebarRow 
            Icon={VideoLibraryIcon}
            title='Videos'
        />
        <SidebarRow 
            Icon={ExpandMoreOutlined}
            title='Marketplace'
        />
    </div>
  )
}

export default Sidebar