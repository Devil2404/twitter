import React from 'react'
import './sidebar.css'
import SidebarOption from './SidebarOption'
function Sidebar() {
    return (
        <div className="sidebar">
            <i className="fab fa-twitter t1"></i>
            <SidebarOption active icon="fas fa-home" txt="Home" />
            <SidebarOption icon="fas fa-search" txt="Explore" />
            <SidebarOption icon="far fa-bell" txt="Notification" />
            <SidebarOption icon="fas fa-envelope" txt="Message" />
            <SidebarOption icon="fas fa-list" txt="List" />
            <SidebarOption icon="far fa-user" txt="Profile" />
            <SidebarOption icon="fas fa-caret-down" txt="More" />
            <button className="tweet">Tweet</button>
        </div>
    )
}

export default Sidebar
