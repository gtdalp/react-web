(function () {
  'use strict';

  var LoginSelector = React.createClass({
    signIn: handleSubmit,
    render: function () {
      return (
        <article className="hold-transition login-page loginSelector">
          <div className="login-box">
            <div className="login-logo">
              React-Web
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
    var email = this.refs.email.getDOMNode().value.trim();
    var password = this.refs.password.getDOMNode().value.trim();
    if (!password || !email) {
      return;
    }
    //send to server
    $.post('/api/signIn', {email: email, password: password}, function (data) {
      if (data.code === '8000') {
        window.location.href = '/ad/index';
      }
    });
  }

  React.render(
    <LoginSelector />,
    document.getElementById('login')
  );
})();
