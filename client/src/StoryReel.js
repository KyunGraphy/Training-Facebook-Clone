import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
  return (
    <div className='storyReel'>
        {/* Story */}
        <Story 
            image='https://images.pexels.com/photos/9381737/pexels-photo-9381737.jpeg?auto=compress&cs=tinysrgb&w=600'
            profileSrc='https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/273140864_3124650677818973_1811547904194770955_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MbLaT7sHWMwAX82DA-v&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT8WCBByrnU3xAOMQ8f1duPty9v3lThoF66e954ua7FUGg&oe=62C50DF5'
            title='Trung Kien'
        />
        <Story 
            image='https://images.pexels.com/photos/12656616/pexels-photo-12656616.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            profileSrc='https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/118962259_1469256559950762_8485395199846333437_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Q9Ernt3mDxUAX8VbFS5&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8I_7nA7P1ZmM8bC00ZwiH425T3ehKMUiL30Jr67pz_mw&oe=62E4F07E'
            title='Hoang Phong'
        />
        <Story 
            image='https://images.pexels.com/photos/12397035/pexels-photo-12397035.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            profileSrc='https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-1/279206745_1660703434294469_3199708892001852185_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=x9n2HUz5F-kAX_Wcq8t&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT94pisPjNTG0369v27VhGf0aEeegv9VSDQWk8stVAqn7w&oe=62C617C0'
            title='Van Tien'
        />
        <Story 
            image='https://images.pexels.com/photos/11572569/pexels-photo-11572569.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            profileSrc='https://scontent.fsgn13-4.fna.fbcdn.net/v/t1.6435-9/93010412_1316071425255355_7550077573179375616_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1rypyt5Ai1MAX-VLcGK&tn=lkV0vCdrGdRFFlr3&_nc_ht=scontent.fsgn13-4.fna&oh=00_AT-c9a0Vyq07x32k-me5d4rlXIlQFVscjqTrNK05ctYDaA&oe=62E701AF'
            title='Duc Cong'
        />
        <Story 
            image='https://images.pexels.com/photos/12118273/pexels-photo-12118273.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            profileSrc='https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/273996499_2999282733627721_387543787192041278_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jWUPJienZZUAX8d97ZE&_nc_ht=scontent.fsgn13-4.fna&oh=00_AT-ZpOc67uSh_c40sobAJT4eeHFgTWRISO4pvmAa6hhzew&oe=62C6ADBF'
            title='Quoc Thang'
        />
        <Story 
            image='https://images.pexels.com/photos/12604485/pexels-photo-12604485.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            profileSrc='https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/275082463_1405561933248368_2560322659964082163_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=89cUGD27wPIAX-Qd_GR&tn=lkV0vCdrGdRFFlr3&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT9xZIJ5uSKbwUaTBLVW0IYzQeEXWfaIJ4glx5EHmR7R2g&oe=62C61645'
            title='Nam Vu'
        />
    </div>
  )
}

export default StoryReel