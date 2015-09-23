(function () {
  'use strict';

  var LoginSelector = React.createClass({
    signIn: handleSubmit,
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
                <input type="email" className="form-control" placeholder="Email" ref="email"/>
                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
              </div>

              <div className="form-group has-feedback">
                <input type="password" className="form-control" placeholder="Password" ref="password"/>
                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
              </div>

              <div className="row">
                <div className="col-xs-12">
                  <button onClick={this.signIn} type="submit" className=" btn btn-primary btn-block btn-flat">Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      );
    }
  });

  function handleSubmit() {
    var author = this.refs.email.getDOMNode().value.trim();
    var text = this.refs.password.getDOMNode().value.trim();
    if (!text || !author) {
      return;
    }
    //send to server
    $.ajax({
      url: '/api/signIn',
      dataType: 'json',
      method: 'POST',
      success: function (data) {
        window.location.href='/ad/admin';
      },
      error: function (xhr, status, err) {
        console.error(status, err.toString());
      }
    });
  }

  React.render(
    <LoginSelector />,
    document.getElementById('login')
  );
})();
