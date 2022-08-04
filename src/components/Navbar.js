import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
          <div class="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
            <h3> Monitoring System </h3>
          </div>
          <ul class="nav">
            <li class="nav-item profile">
              <div class="profile-desc">


                <div class="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list" aria-labelledby="profile-dropdown">
                  <a href="#" class="dropdown-item preview-item">
                    <div class="preview-thumbnail">
                      <div class="preview-icon bg-dark rounded-circle">
                        <i class="mdi mdi-settings text-primary"></i>
                      </div>
                    </div>

                  </a>


                </div>
              </div>
            </li>
            <li class="nav-item nav-category">
              <span class="nav-link">Navigation</span>
            </li>
            <li class="nav-item menu-items">
              <a class="nav-link" href="/icu">
                <span class="menu-icon">
                  <i class="mdi mdi-speedometer"></i>
                </span>
                <span class="menu-title">ICU</span>
              </a>
            </li>


            <li class="nav-item menu-items">
              <a class="nav-link" href="/special-ward">
                <span class="menu-icon">
                  <i class="mdi mdi-chart-bar"></i>
                </span>
                <span class="menu-title">Special ward</span>
              </a>
            </li>


            <li class="nav-item menu-items">
              <a class="nav-link" href="/lab">
                <span class="menu-icon">
                  <i class="mdi mdi-file-document-box"></i>
                </span>
                <span class="menu-title">Lab</span>
              </a>
            </li>
          </ul>
        </nav>
  )
}
export default Navbar;