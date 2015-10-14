(function () {
  'use strict';

  var ContentSelector = React.createClass({
    postArticle: function () {
      React.render(React.getComponent('PostArticle'), document.getElementById('content'));
    },
    render: function () {
      return <header className="main-header">
        <a href="#" className="logo">
          <img src="images/react-web.png" className="width:170px"/>

        </a>
        <nav className="navbar navbar-static-top" role="navigation">
          <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span className="sr-only">Toggle navigation</span>
          </a>

          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown messages-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-envelope-o"></i>
                  <span className="label label-success">4</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">You have 4 messages</li>
                  <li>
                    <ul className="menu">
                      <li>
                        <a href="#">
                          <div className="pull-left">
                            <img src="#" className="img-circle" alt="User Image"/>
                          </div>
                          <h4>
                            Support Team
                            <small><i className="fa fa-clock-o"></i> 5 mins</small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="pull-left">
                            {/*<img src="dist/img/user3-128x128.jpg" className="img-circle" alt="User Image"/>*/}
                          </div>
                          <h4>
                            AdminLTE Design Team
                            <small><i className="fa fa-clock-o"></i> 2 hours</small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="pull-left">
                            {/*<img src="dist/img/user4-128x128.jpg" className="img-circle" alt="User Image"/>*/}
                          </div>
                          <h4>
                            Developers
                            <small><i className="fa fa-clock-o"></i> Today</small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="pull-left">
                            {/* <img src="dist/img/user3-128x128.jpg" className="img-circle" alt="User Image"/>*/}
                          </div>
                          <h4>
                            Sales Department
                            <small><i className="fa fa-clock-o"></i> Yesterday</small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="pull-left">
                             {/* <img src="dist/img/user4-128x128.jpg" className="img-circle" alt="User Image"/>*/}
                          </div>
                          <h4>
                            Reviewers
                            <small><i className="fa fa-clock-o"></i> 2 days</small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer"><a href="#">See All Messages</a></li>
                </ul>
              </li>
              <li className="dropdown notifications-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-bell-o"></i>
                  <span className="label label-warning">10</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">You have 10 notifications</li>
                  <li>
                    <ul className="menu">
                      <li>
                        <a href="#">
                          <i className="fa fa-users text-aqua"></i> 5 new members joined today
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-warning text-yellow"></i> Very long description here that may not fit into
                          the
                          page
                          and may cause design problems
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-users text-red"></i> 5 new members joined
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart text-green"></i> 25 sales made
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user text-red"></i> You changed your username
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer"><a href="#">View all</a></li>
                </ul>
              </li>
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img src="#" className="user-image" alt="User Image"/>
                  <span className="hidden-xs">Alexander Pierce</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="user-header">
                    <img src="#" className="img-circle" alt="User Image"/>

                    <p>
                      Microlv - Web Developer
                      <small>Member since Nov. 2012</small>
                    </p>
                  </li>
                  <li className="user-body">
                    <div className="col-xs-4 text-center">
                      <a href="#">Followers</a>
                    </div>
                    <div className="col-xs-4 text-center">
                      <a href="#">Sales</a>
                    </div>
                    <div className="col-xs-4 text-center">
                      <a href="#">Friends</a>
                    </div>
                  </li>
                  <li className="user-footer">
                    <div className="pull-left">
                      <a href="#" className="btn btn-default btn-flat">Profile</a>
                    </div>
                    <div className="pull-right">
                      <a href="#" className="btn btn-default btn-flat">Sign out</a>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" onClick={this.postArticle} data-toggle="control-sidebar"><i className="fa fa-gears"></i>PostArticle</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>;
    }
  });

  React.render(<ContentSelector />, document.getElementById('frame-header'));
})();