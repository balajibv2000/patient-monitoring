import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
         
          <ul class="nav" style={{padding: 10 , position: 'fixed'}}>
            <li class="nav-item profile">
              <div class="profile-desc">
              <div class="profile-pic">
                <div class="count-indicator">
                  <span class="mdi mdi-account"></span>
                </div>
                <div class="profile-name">
                  <h5 class="mb-0 font-weight-normal">Admin</h5>
                </div>
              </div>
              </div>
            </li>
            <li class="nav-item nav-category">
              <span class="nav-link">Navigation</span>
            </li>
            <li class="nav-item menu-items">
              <a class="nav-link" href="/">
                <span class="menu-icon ">
                  <i class="mdi mdi-home"></i>
                </span>
                <span class="menu-title">Home</span>
              </a>
            </li>

            <li class="nav-item menu-items">
              <a class="nav-link" href="/icu">
                <span class="menu-icon ">
                  <i class="mdi mdi-hospital"></i>
                </span>
                <span class="menu-title">ICU</span>
              </a>
            </li>


            <li class="nav-item menu-items">
              <a class="nav-link" href="/special-ward">
                <span class="menu-icon">
                  <i class="mdi mdi-hospital-building"></i>
                </span>
                <span class="menu-title">Special ward</span>
              </a>
            </li>


            <li class="nav-item menu-items">
              <a class="nav-link" href="/lab">
                <span class="menu-icon">
                  <i class="mdi mdi-flask-outline"></i>
                </span>
                <span class="menu-title">Lab</span>
              </a>
            </li>

            <li class="nav-item menu-items">
              <a class="nav-link" href="/documentation">
                <span class="menu-icon ">
                  <i class="mdi mdi-file-document"></i>
                </span>
                <span class="menu-title">Documentation</span>
              </a>
            </li>

          </ul>
        </nav>
  )
}
export default Navbar;