import React, { useState } from 'react';
import './Sidebar.css';
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
    const [active, setActive] = useState('');

    const handleActive = (name) => {
        setActive(name);
    };

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to='/' className='link'>
                            <li className={`sidebarListItem ${active === 'home' ? 'active' : ''}`} onClick={() => handleActive('home')}>
                                <LineStyleIcon className='sidebarIcon'/>Home
                            </li>
                        </Link>
                        <Link to='/users' className='link'>
                            <li className={`sidebarListItem ${active === 'users' ? 'active' : ''}`} onClick={() => handleActive('users')}>
                                <PermIdentityIcon className='sidebarIcon'/>Users
                            </li>
                        </Link>
                        <Link to='/newuser' className='link'>
                            <li className={`sidebarListItem ${active === 'newuser' ? 'active' : ''}`} onClick={() => handleActive('newuser')}>
                                <PeopleOutlineIcon className='sidebarIcon'/>New User
                            </li>
                        </Link>
                        <Link to='/products' className='link'>
                            <li className={`sidebarListItem ${active === 'products' ? 'active' : ''}`} onClick={() => handleActive('products')}>
                                <StorefrontIcon className='sidebarIcon'/>Products
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>DMSV Academy Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to='/courses' className='link'>
                            <li className={`sidebarListItem ${active === 'courses' ? 'active' : ''}`} onClick={() => handleActive('courses')}>
                                <TimelineIcon className='sidebarIcon'/>Courses
                            </li>
                        </Link>
                        <Link to='/createcourses' className='link'>
                            <li className={`sidebarListItem ${active === 'createCourse' ? 'active' : ''}`} onClick={() => handleActive('createCourse')}>
                                <TrendingUpIcon className='sidebarIcon'/>Create Course
                            </li>
                        </Link>
                        <li className={`sidebarListItem ${active === 'transaction' ? 'active' : ''}`} onClick={() => handleActive('transaction')}>
                            <BarChartIcon className='sidebarIcon'/>Transaction
                        </li>
                        <li className={`sidebarListItem ${active === 'reports' ? 'active' : ''}`} onClick={() => handleActive('reports')}>
                            <ReportGmailerrorredIcon className='sidebarIcon'/>Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Notification</h3>
                    <ul className="sidebarList">
                        <li className={`sidebarListItem ${active === 'mail' ? 'active' : ''}`} onClick={() => handleActive('mail')}>
                            <MailOutlineIcon className='sidebarIcon'/>Mail
                        </li>
                        <li className={`sidebarListItem ${active === 'feedback' ? 'active' : ''}`} onClick={() => handleActive('feedback')}>
                            <ChatBubbleOutlineIcon className='sidebarIcon'/>Feedback
                        </li>
                        <li className={`sidebarListItem ${active === 'message' ? 'active' : ''}`} onClick={() => handleActive('message')}>
                            <DynamicFeedIcon className='sidebarIcon'/>Message
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Staff</h3>
                    <ul className="sidebarList">
                        <li className={`sidebarListItem ${active === 'manage' ? 'active' : ''}`} onClick={() => handleActive('manage')}>
                            <WorkOutlineIcon className='sidebarIcon'/>Manage
                        </li>
                        <li className={`sidebarListItem ${active === 'analytics' ? 'active' : ''}`} onClick={() => handleActive('analytics')}>
                            <TimelineIcon className='sidebarIcon'/>Analytics
                        </li>
                        <li className={`sidebarListItem ${active === 'staffReports' ? 'active' : ''}`} onClick={() => handleActive('staffReports')}>
                            <ReportGmailerrorredIcon className='sidebarIcon'/>Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
