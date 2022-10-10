import React from 'react'
import { Link } from 'react-router-dom'
import { sidebarMenu } from '../Data'

const Sidebar = ({ setSidebarOpened, sidebarOpened }) => {
    
    return (
      <div className="sidebar">
        <div className="controlIcon" onClick={() => setSidebarOpened(!sidebarOpened)}>
  
          <i className="fa fa-angle-left"></i>
        </div>
        <div className="sidebarWrapper">
          <div className="searchBar">
            <div className="icon"><i className="fa fa-search"></i></div>
            <input type="text" placeholder='Search' />
            <span className="tooltip ">search</span>
          </div>
          {
            sidebarMenu.map((menu) => (
              <div className="sidebarMenu" key={menu.id}>
                <ul className="sidebarList" onClick={() => setSidebarOpened(false)}>
                  {menu.list.map((li) => (
                    <li key={li.id} className="sidebarListItem">
                      <Link to={li.link} >
                        <div className="icon"><i className={li.icon}></i></div>
                        <span className="text ">{li.item}</span>
                      </Link>
                      <span className="tooltip ">{li.item}</span>
                    </li>
                  ))}
                </ul>
  
              </div>
            ))
          }
        </div>
      </div>
    )
  }

export default Sidebar