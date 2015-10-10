(function () {
  'use strict';

  var NavigatorItemSelector = React.createClass({
    render: function () {
      console.log(this.props);
      console.log(this.props.items);

//      var lis = this.props.items.map(function (item) {
//        return ;
//      });

      return <li>
        <a href="#">
          <i className={item.icon}></i> <span>{item.name}</span>
          <small className="label pull-right bg-red">3</small>
        </a>
      </li>;
    }
  });

//  React.render(<NavigatorItemSelector />, document.getElementById('navigator-item'));
})();
