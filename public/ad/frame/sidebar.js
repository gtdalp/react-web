(function () {
  'use strict';

  var SideBarSelector = React.createClass({
    render: function () {
      return <aside className="main-sidebar">
        <section className="sidebar">
          <div className="user-panel">
            <div className="pull-left image">
              <img src="../lib/AdminLTE/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
            </div>
            <div className="pull-left info">
              <p>Alexander Pierce</p>
              <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
            </div>
          </div>
          <div id="navigator"></div>
        </section>
      </aside>;
    }
  });

  React.render(<SideBarSelector/>, document.getElementById('frame-sidebar'));

})();