(function () {
  'use strict';

  var NavigatorItemSelector = React.createClass({
    handleRouter: function () {
//      console.log('url-->' + name);
      React.render(React.getComponent('Timeline'), document.getElementById('content'));
    },
    render: function () {
      var that = this;
      var lis = this.props.items.map(function (item) {
        return <li><a href="#" onClick={that.handleRouter} data-tag={item.name}>
          <i className={item.icon}></i> <span>{item.name}</span>
          <small className="label pull-right bg-red">{item.count}</small>
        </a></li>;
      });
      return <ul className="sidebar-menu">
        <li className="header">Category</li>
        {lis}
        <li className="header">Demo</li>
        {/*
        <li><a href="#"><i className="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
        <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
        <li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
        */}
      </ul>;
    }
  });

  var NavigatorSelector = React.createClass({
    getInitialState: function () {
      return {items: []};
    },
    componentDidMount: function () {
      this.fetchData();
    },
    fetchData: function () {
      $.get('/api/getCategory').then(function (category) {
        //get count
        $.get('/api/getArticleCount').then(function (article) {
          _.forEach(category.data, function (cate) {
            _.forEach(article, function (art) {
              if (cate._id === art._id) {
                cate.count = art.count;
              }
            });
          });

          this.setState({items: category.data});
        }.bind(this));
        this.setState({items: category.data});
      }.bind(this));
    },
    render: function () {
      return <NavigatorItemSelector items={this.state.items}/>;
    }
  });

  React.registerComponent('NavigatorItemSelector', <NavigatorItemSelector/>);
  React.render(<NavigatorSelector/>, document.getElementById('navigator'));


})();


