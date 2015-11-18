'use strict';

var ReactDom = require('react-dom');

var HeaderSelector = ReactDom.createClass({
  render: function () {
    return <header className="main-header">
      <nav className="navbar navbar-static-top" role="navigation">
        <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
        </a>

        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            <li className="dropdown user user-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <img src="images/me64X64.ico" className="user-image" alt="User Image"/>
                <span className="hidden-xs">Alexander Pierce</span>
              </a>
              <ul className="dropdown-menu">
                <li className="user-header">
                  <img src="images/me64X64.ico" className="img-circle" alt="User Image"/>
                  <p>
                    Microlv - Web Developer
                    <small>2009 - 2015</small>
                  </p>
                </li>
                <li className="user-body">
                  <div className="col-xs-12 text-center">
                  </div>
                </li>
                <li className="user-footer">
                  <div>
                    <a href="#" className="btn btn-default btn-flat">Profile</a>
                    <a href="https://github.com/microlv" className="btn btn-default btn-flat"
                       target="_blank">Followers</a>
                    <a href="#" className="btn btn-default btn-flat">Sign out</a>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <a href="/admin#/postarticle" data-toggle="control-sidebar"><i className="fa fa-edit"></i>
                Post-Article</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>;
  }
});

//component.HeaderSelector = HeaderSelector;

module.exports = HeaderSelector;
