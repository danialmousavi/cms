import React from 'react'
import './Sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <>
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to='/' className='link'>
                        <li className='sidebarListItem active'>
                            <LineStyleIcon className='sidebarIcon'/>Home
                        </li>
                        </Link>
                        <li className='sidebarListItem'>
                            <TimelineIcon className='sidebarIcon'/>Analytics
                        </li>
                        <li className='sidebarListItem'>
                            <TrendingUpIcon className='sidebarIcon'/>Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Quick menu</h3>
                    <ul className="sidebarList">
                    <Link to='/users' className='link'>
                            <li className='sidebarListItem '>
                                <PermIdentityIcon className='sidebarIcon'/>users
                            </li>
                    </Link>
                    <Link to='/newuser' className='link'>
                        <li className='sidebarListItem'>
                            <PeopleOutlineIcon className='sidebarIcon'/>New User
                        </li>
                    </Link>
                    <Link to='/products' className='link'>
                        <li className='sidebarListItem'>
                            <StorefrontIcon className='sidebarIcon'/>pruducts
                        </li>
                    </Link>

                        <li className='sidebarListItem'>
                            <BarChartIcon className='sidebarIcon'/>Transaction
                        </li>
                        <li className='sidebarListItem'>
                            <ReportGmailerrorredIcon className='sidebarIcon'/>Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Notification</h3>
                    <ul className="sidebarList">
                        <li className='sidebarListItem '>
                            <MailOutlineIcon className='sidebarIcon'/>Mail
                        </li>
                        <li className='sidebarListItem'>
                            <ChatBubbleOutlineIcon className='sidebarIcon'/>feedback
                        </li>
                        <li className='sidebarListItem'>
                            <DynamicFeedIcon className='sidebarIcon'/>Message
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Staff</h3>
                    <ul className="sidebarList">
                        <li className='sidebarListItem '>
                            <WorkOutlineIcon className='sidebarIcon'/>Manage
                        </li>
                        <li className='sidebarListItem'>
                            <TimelineIcon className='sidebarIcon'/>Analytics
                        </li>
                        <li className='sidebarListItem'>
                            <ReportGmailerrorredIcon className='sidebarIcon'/>Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
)
}
