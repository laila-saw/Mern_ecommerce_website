import React from 'react'
import { Link } from 'react-router-dom';

const Topbar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <Link to='/'>
              <h1 className="logo ">Saw<span>Admin.</span></h1>
            </Link>
  
          </div>
          <div className="topRight">
            <div className="topbarIcons">
              <div className="icon">
                <i className="fa fa-bell"></i>
                <div className="iconBage">2</div>
              </div>
              <div className="icon"><i className="fa fa-envelope"></i></div>
              <div className="icon"><i className="fa fa-user"></i></div>
            </div>
            <div className="topProfileImg">
              <img src={PF + "watcheW2.png"} alt="" />
            </div>
          </div>
        </div>
      </div>
    )
  }

export default Topbar