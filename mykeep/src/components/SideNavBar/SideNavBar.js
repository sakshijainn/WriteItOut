import React from "react";
import "./SideNavBar.css";
function SideNavBar() {
  return (
    <div className="sidenavbar">
      <div className="sidenavbar_top">
        <div className="sidenavbar_profile">
          <div className="profile">S</div>
          <div className="title">
            Sakshi Jain
            <i className="fa fa-angle-down icon" aria-hidden="true"></i>
          </div>
        </div>
        <div className="sidenavbar_search">
        <div className="searchbar">
        <input/>
        <i class="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
        <div className="sidenavbar_createNote">
        <div className="createNote">
            <i class="fa fa-plus" aria-hidden="true"></i>
            <div className="note">New Note</div>
        </div>
           

        </div>
        <div className="sidenavbar-menu">
            <ul>
            <li> <i class="fa fa-star-o" aria-hidden="true">  </i> &nbsp;  Home </li>
            <li> <i class="fa fa-star-o" aria-hidden="true">  </i> &nbsp;   Shortcuts </li>
            <li> <i class="fa fa-star-o" aria-hidden="true">  </i> &nbsp;  Notes </li>
            <li><i class="fa fa-star-o" aria-hidden="true"></i> &nbsp;   Notebooks </li>
            <li> <i class="fa fa-star-o" aria-hidden="true"></i> &nbsp;   Tags </li>
            <li> <i class="fa fa-star-o" aria-hidden="true"></i> &nbsp;   Trash </li>
            </ul>
        
        </div>
        </div>
      </div>

     
  );
}

export default SideNavBar;
