(function () {
  'use strict';

  var NavigatorItemSelector = React.createClass({

    render: function () {
      var lis = this.props.items.map(function (item) {
        return <li>
          <a href={"/admin#/timeline/"+item._id}>
            <i className={item.icon}></i> <span>{item.name}</span>
            <small className="label pull-right bg-red">{item.count}</small>
          </a>
        </li>;
      }.bind(this));

      return <ul className="sidebar-menu">
        <li className="header">Tech Category</li>
        {lis}
        <li className="header">GitHub Project</li>

        <li><a href="https://github.com/microlv/react-web"><i>react-web</i></a></li>
        <li><a href="https://github.com/microlv/ng-web"><i>ng-web</i></a></li>
        <li><a href="https://github.com/microlv/gulp-requirejs-combine"><i>gulp-requirejs-combine</i></a></li>
        <li><a href="https://github.com/microlv/gulp-ng-template-html"><i>gulp-ng-template-html</i></a></li>
        <li><a href="https://github.com/microlv/gulp-folder"><i>gulp-folder</i></a></li>
        <li><a href="https://github.com/microlv/ngMessage"><i>ngMessage</i></a></li>
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
            _.forEach(article.data, function (art) {
              if (cate._id === art._id) {
                cate.count = art.count;
              }
            });
          });

          this.setState({items: category.data});
        }.bind(this));
//        this.setState({items: category.data});
      }.bind(this));
    },
    render: function () {
      return <NavigatorItemSelector items={this.state.items}/>;
    }
  });

  var SideBarSelector = React.createClass({
    render: function () {
      return <aside className="main-sidebar">
        <section className="sidebar">
          <a href="#" className="logo">
            <img src="images/react-web.png" className="width:170px"/>

          </a>

          <div className="user-panel">
            <div className="pull-left image">
              <img src="images/me64X64.ico" className="img-circle" alt="User Image"/>
            </div>
            <div className="pull-left info">
              <p>Microlv</p>
              <a href="https://github.com/microlv"><i className="fa fa-circle text-success"></i>Fork me on Github</a>
            </div>
          </div>
          <NavigatorSelector/>
        </section>
      </aside>;
    }
  });

  React.component.NavigatorSelector = NavigatorSelector;
  React.component.SideBarSelector = SideBarSelector;

})();