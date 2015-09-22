/////<reference path="../../angular2/typings/angular2/angular2.d.ts"/>
//
//import {
//  Component,
//  View,
//  bootstrap
//} from "angular2/angular2";
//
//import {
//  Http
//} from 'angular2/http';
//
//@Component({
//    selector: 'login'
//})
//
//@View({
//    template: `
//    <article class="hold-transition login-page">
//      <div class="login-box">
//        <div class="login-logo">
//          <div>angular 2</div>
//          <div>ng2-web</div>
//        </div>
//        <div class="login-box-body">
//          <p class="login-box-msg">Sign in to start your session</p>
//
//          <div class="form-group has-feedback">
//            <input type="email" class="form-control" #username placeholder="Email">
//            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
//          </div>
//          <div class="form-group has-feedback">
//            <input type="password" class="form-control" #password placeholder="Password">
//            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
//          </div>
//          <div class="row">
//            <div class="col-xs-12">
//              <button type="submit" (click)="signIn" class="btn btn-primary btn-block btn-flat">Sign In</button>
//            </div>
//          </div>
//        </div>
//      </div>
//    </article>
//		`
//})
//
//class LoginSelector {
//    http:Http;
//
//    constructor() {
//        this.username = '';
//        this.password = '';
//    }
//
//    signIn() {
//        console.log('signIn');
//        http.get('/api/test').subscribe(response => {
//            console.log(response);
//        });
//    }
//}
//
//bootstrap(LoginSelector);