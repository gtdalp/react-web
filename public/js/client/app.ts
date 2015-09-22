///<reference path="../../angular2/typings/angular2/angular2.d.ts"/>

import {
    Component,
    View,
    bootstrap
} from "angular2/angular2";

@Component({
  selector: 'hello-word'
})

@View({
  template: `<div>hello --- world</div>`
})

class HelloWorld {

}

bootstrap(HelloWorld);