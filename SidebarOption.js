import React from 'react'
import './sidebar.css'
function SidebarOption({active,txt, icon }) {
    return (
        <div className={`sidebarOption ${active && "active"}`}>
            <i className={icon}></i>
            <h2>{txt}</h2>
        </div>
    )
}

export default SidebarOption
