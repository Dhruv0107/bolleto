import React from 'react'

const Header = () => {
  const logout = () => {
    window.localStorage.removeItem("uid")
    window.location.href = "/Login"
  }
  return (
    <>
      <div className="overlay"></div>

      <nav className="navbar p-l-5 p-r-5">
        <ul className="nav navbar-nav navbar-left">
          <li>
            <div className="navbar-header">
              <a href="javascript:void(0);" className="bars" />
              <a className="navbar-brand" href="Dashboard"><img src="http://localhost:3000/assets/images/logo/logo.png" width={120} /><span className="m-l-10"></span></a>
            </div>
          </li>
          {/* <li><a href="javascript:void(0);" className="ls-toggle-btn" data-close="true"><i className="zmdi zmdi-swap" /></a></li> */}
          {/* <li className="d-none d-lg-inline-block"><a href="events.html" title="Events"><i className="zmdi zmdi-calendar" /></a></li> */}
          {/* <li className="d-none d-lg-inline-block"><a href="mail-inbox.html" title="Inbox"><i className="zmdi zmdi-email" /></a></li> */}
          {/* <li><a href="contact.html" title="Contact List"><i className="zmdi zmdi-account-box-phone" /></a></li> */}
          <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button"><i className="zmdi zmdi-notifications" />
            <div className="notify"><span className="heartbit" /><span className="point" /></div>
          </a>
            {/* <ul className="dropdown-menu pullDown">
              <li className="body">
                <ul className="menu list-unstyled">
                </ul>
              </li>
              <li className="footer"> <a href="javascript:void(0);">View All</a> </li>
            </ul> */}
          </li>
          <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button"><i className="zmdi zmdi-flag" />
            <div className="notify">
              <span className="heartbit" />
              <span className="point" />
            </div>
          </a>
            <ul className="dropdown-menu pullDown">
              <li className="header">Project</li>
              <li className="body">
                <ul className="menu tasks list-unstyled">
                  <li>
                    <a href="javascript:void(0);">
                      <div className="progress-container progress-primary">
                        <span className="progress-badge">Neurology</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow={86} aria-valuemin={0} aria-valuemax={100} style={{ width: '86%' }}>
                            <span className="progress-value">86%</span>
                          </div>
                        </div>

                      </div>
                    </a>
                  </li>

                </ul>
              </li>
              <li className="footer"><a href="javascript:void(0);">View All</a></li>
            </ul>
          </li>
          <li className="d-none d-md-inline-block col-sm-9">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search..." />
              <span className="input-group-addon">
                <i className="zmdi zmdi-search" />
              </span>
            </div>
          </li>
          <li className="float-right">
            <a href="" className="mega-menu" data-close="true" onClick={logout}><i className="zmdi zmdi-power" /></a>
            {/* <a href="javascript:void(0);" className="js-right-sidebar" data-close="true"><i className="zmdi zmdi-settings zmdi-hc-spin" /></a> */}
          </li>
        </ul>
      </nav>

    </>
  )
}

export default Header
