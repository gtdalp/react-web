(function () {
  'use strict';

  var LoginSelector = React.createClass({
    render: function () {
      return (
        <article class="hold-transition login-page loginSelector">
          <div class="login-box">
            <div class="login-logo">
              <div>angular 2</div>
              <div>ng2-web</div>
            </div>
            <div class="login-box-body">
              <p class="login-box-msg">Sign in to start your session</p>

              <div class="form-group has-feedback">
                <input type="email" class="form-control" placeholder="Email"/>
                <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
              </div>

              <div class="form-group has-feedback">
                <input type="password" class="form-control" placeholder="Password"/>
                <span class="glyphicon glyphicon-lock form-control-feedback"></span>
              </div>

              <div class="row">
                <div class="col-xs-12">
                  <button type="submit" class=" btn btn-primary btn-block btn-flat">Sign In</button>
                </div>
              </div>
            </div>
          </div>
        </article>
      );
    }
  });

  React.render(
    //<div id="LoginSelector"></div>,

    <article class="hold-transition login-page loginSelector">
      <div class="login-box">
        <div class="login-logo">
          <div>angular 2</div>
          <div>ng2-web</div>
        </div>
        <div class="login-box-body">
          <p class="login-box-msg">Sign in to start your session</p>

          <div class="form-group has-feedback">
            <input type="email" class="form-control" placeholder="Email"/>
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>

          <div class="form-group has-feedback">
            <input type="password" class="form-control" placeholder="Password"/>
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>

          <div class="row">
            <div class="col-xs-12">
              <button type="submit" class=" btn btn-primary btn-block btn-flat">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </article>,
    document.getElementById('login')
  );
})();
