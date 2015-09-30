(function () {
  'use strict';

  var ProfileSelector = React.createClass({
    render: function () {
      return <section className="content row">
        <div className="col-md-3">
          <div className="box box-primary">
            <div className="box-body box-profile">
              <img className="profile-user-img img-responsive img-circle" src="../../dist/img/user4-128x128.jpg"
                   alt="User profile picture"/>

              <h3 className="profile-username text-center">Nina Mcintire</h3>

              <p className="text-muted text-center">Software Engineer</p>

              <ul className="list-group list-group-unbordered">
                <li className="list-group-item">
                  <b>Followers</b> <a className="pull-right">1,322</a>
                </li>
                <li className="list-group-item">
                  <b>Following</b> <a className="pull-right">543</a>
                </li>
                <li className="list-group-item">
                  <b>Friends</b> <a className="pull-right">13,287</a>
                </li>
              </ul>

              <a href="#" className="btn btn-primary btn-block"><b>Follow</b></a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="box box-primary">
            <div className="box-header with-border">
              <h3 className="box-title">About Me</h3>
            </div>
            <div className="box-body">
              <strong><i className="fa fa-book margin-r-5"></i> Education</strong>

              <p className="text-muted">
                B.S. in Computer Science from the University of Tennessee at Knoxville
              </p>

              <hr/>

              <strong><i className="fa fa-map-marker margin-r-5"></i> Location</strong>

              <p className="text-muted">Malibu, California</p>

              <hr/>

              <strong><i className="fa fa-pencil margin-r-5"></i> Skills</strong>

              <p>
                <span className="label label-danger">UI Design</span>
                <span className="label label-success">Coding</span>
                <span className="label label-info">Javascript</span>
                <span className="label label-warning">PHP</span>
                <span className="label label-primary">Node.js</span>
              </p>

              <hr/>

              <strong><i className="fa fa-file-text-o margin-r-5"></i> Notes</strong>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
            </div>
          </div>
        </div>
      </section>;
    }
  });

  React.render(<ProfileSelector />, document.getElementById('content'));
})();