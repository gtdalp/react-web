(function () {
  'use strict';

  var SideBarSelector = React.createClass({
    render: function () {
      return <aside className="main-sidebar">
        <section className="sidebar">
          <a href="#" className="logo">
            <img src="images/react-web.png" className="width:170px"/>

          </a>

          <div className="user-panel">
            <div className="pull-left image">
              <img src="images/me64X64.ico" className="img-circle" alt="User Image"/>
            </div>
            <div className="pull-left info">
              <p>Microlv</p>
              <a href="https://github.com/microlv"><i className="fa fa-circle text-success"></i>Fork me on Github</a>
            </div>
          </div>
          <div id="navigator"></div>
        </section>
      </aside>;
    }
  });

  React.render(<SideBarSelector/>, document.getElementById('frame-sidebar'));

})();