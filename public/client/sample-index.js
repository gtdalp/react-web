(function () {

  'use strict';

  var colors = [
    'bg-red,',
    'bg-yellow',
    'bg-aqua',
    'bg-blue',
    'bg-light-blue',
    'bg-green',
    'bg-navy',
    'bg-teal',
    'bg-olive',
    'bg-lime',
    'bg-orange',
    'bg-fuchsia',
    'bg-purple',
    'bg-maroon',
    'bg-black'
  ];
  var icons = [
    'fa-star-o',
    'fa-thumbs-o-up',
    'fa-comments',
    'fa-envelope',
    'fa-user',
    'fa-video-camera',
    'fa-clock-o',
    'fa-heart-o',
    'fa-thumb-tack',
    'fa-external-link',
    'fa-trophy',
    'fa-cogs'
  ];

  var colorStyle = [
    'rgba(0, 115, 183, 0.6)',
    'rgba(0, 166, 90, 0.6)',
    'rgba(0, 200, 43, 0.6)',
    'rgba(0, 100, 31, 0.6)',
    'rgba(0, 56, 71, 0.6)',
    'rgba(0, 30, 111, 0.6)',
    'rgba(200, 11, 76, 0.6)',
    'rgba(150, 115, 183, 0.6)',
    'rgba(140, 40, 30, 0.6)',
    'rgba(40, 120, 100, 0.6)',
    'rgba(0, 115, 23, 0.6)',
    'rgba(23, 190, 23, 0.6)',
    'rgba(40, 30, 183, 0.6)',
    'rgba(0, 56, 130, 0.6)'
  ];

  var ArticleItem = React.createClass({
    render: function () {
      var lis = this.props.items.map(function (item) {
        var backColor = round(colorStyle);
        return <div className="article animated slideInUp" style={{'border-color':backColor+' !important'}}>
          <div className="article-title" style={{'border-color':backColor+' !important'}}>{item.title}
            <div className="article-title-time">
              <i className="fa fa-clock-o"></i>
            <span>
              {item.date.toLocaleDateString()}
            </span>
            </div>
          </div>
          <div className="article-content">
            <p>
              {item.content}
            </p>
          </div>
          <i className={"fa fa-icons "+ round(icons)}></i>
          <a href="#" className={"small-box-footer"} style={{'background':round(colorStyle)+' !important'}}>More info
            <i className="fa fa-arrow-circle-right"></i>
          </a>
        </div>;
      });

      return <div>{lis}</div>;
    }
  });


  var Article = React.createClass({
    getInitialState: function () {
      return {
        items: []
      };
    },
    componentDidMount: function () {
      $.get('/api/getArticleList').then(function (data) {
        this.setState({
          items: data.data
        });
      }.bind(this));
    },
    render: function () {
      return <ArticleItem items={this.state.items}/>;
    }
  });

  var Content = React.createClass({
    render: function () {
      return <article className="container-info">
        <article className="col-md-3 profile-info">
          <div className="row img-box">
            <h3><i className="fa fa-git-square"></i> <a href="https://github.com/microlv">Microlv</a></h3>
            <h5><i className="fa fa-star-o"></i>Web,Nodejs,React,Angular</h5>

            <div className="img-circle">
              <img className="img-circle" src="images/me.jpg"/>
            </div>
          </div>
          <div className="row text-center profile-info-detail">
            <h3 className="profile-username">About Me</h3>

            <p className="text-muted text-center">Web/Nodejs/React/Angular coder</p>

            <p className="text-muted text-center">据说玩github逼格较高，所以呢~</p>
            <a target="_blank" href="https://github.com/microlv/react-web" className="btn btn-primary btn-block"><b>react-web</b></a>
            <a target="_blank" href="https://github.com/microlv/ng-web"
               className="btn btn-primary btn-block"><b>ng-web</b></a>
            <a target="_blank" href="https://github.com/microlv/gulp-requirejs-combine"
               className="btn btn-primary btn-block"><b>gulp-requirejs-combine</b></a>
            <a target="_blank" href="https://github.com/microlv/gulp-folder" className="btn btn-primary btn-block"><b>gulp-folder</b></a>
            <a target="_blank" href="https://github.com/microlv/ngMessage" className="btn btn-primary btn-block"><b>ngMessage</b></a>

          </div>
          <div id="sidebar"></div>
        </article>
        <article className="col-md-9 modal-content content-info"><Article /></article>
      </article>;
    }
  });

  var Footer = React.createClass({
    render: function () {
      return <footer>
        <div>
          <strong>Copyright &copy; 2015-2016 <a href="https://github.com/microlv">Microlv</a>.</strong> All rights
          reserved.
          UI design by <strong>Microlv</strong>
        </div>
      </footer>;
    }
  });

  var App = React.createClass({
    render: function () {
      return <div>
        <Content/>
        <Footer/>
      </div>;
    }
  });

  function round(t) {
    return t[parseInt(Math.random(t.length) * 10)];
  }

  React.render(<App/>, document.body);

})();
