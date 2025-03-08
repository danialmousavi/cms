import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import'./TopBar.css'
export default function TopBar() {
  return (
    <>
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className='logo'>DMSV CMS <FavoriteIcon/></span>
            </div>
            <div className="topRitht">
                <div className="topbarIconContainer">
                    <NotificationsIcon/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className="topbarIconContainer">
                    <LanguageIcon/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className="topbarIconContainer">
                    <SettingsIcon/>
                </div>
                <img src="images/images.jpg" alt="" className='topAvatar'/>
            </div>
        </div>
    </div>
    </>
)
}
