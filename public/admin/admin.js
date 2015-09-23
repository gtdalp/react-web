(function () {
  'use strict';

  var LoginSelector = React.createClass({
    render: function () {
      return (
        <article className="hold-transition login-page loginSelector">
          <div className="login-box">
            <div className="login-logo">
              react-web
            </div>
            <div className="login-box-body">
              <p className="login-box-msg">Sign in to start your session</p>

              <div className="form-group has-feedback">
                <input type="email" className="form-control" placeholder="Email"/>
                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
              </div>

              <div className="form-group has-feedback">
                <input type="password" className="form-control" placeholder="Password"/>
                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
              </div>

              <div className="row">
                <div className="col-xs-12">
                  <button type="submit" className=" btn btn-primary btn-block btn-flat">Sign In</button>
                </div>
              </div>
            </div>
          </div>
        </article>
      );
    }
  });

  React.render(
    <LoginSelector />,
    document.getElementById('login')
  );
})();
