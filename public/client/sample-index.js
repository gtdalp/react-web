/**
 * Created by Microlv on 2015/10/26.
 */

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
  'rgba(0, 56, 130, 0.6)',
];

var ArticleItem = React.createClass({
  render: function () {
    var lis = this.props.items.map(function (item) {
//      var backColor = '#FC9D41';//round(colorStyle);
//      style={{'border-top-color':round(colorStyle)+' !important'}}
      return <div className="article animated slideInUp">
        <div className="article-title" >{item.title}
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

        <div className="article-footer">
          <a href="#">More info <i className="fa fa-arrow-circle-right"></i> </a>
        </div>
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
          <a href="https://github.com/microlv/react-web" className="project-primary"><b>react-web</b></a>
          <a href="https://github.com/microlv/ng-web" className="project-primary"><b>ng-web</b></a>
          <a href="https://github.com/microlv/gulp-requirejs-combine" className="project-primary"><b>gulp-requirejs-combine</b></a>
          <a href="https://github.com/microlv/gulp-ng-template-html" className="project-primary"><b>gulp-ng-template-html</b></a>
          <a href="https://github.com/microlv/gulp-folder" className="project-primary"><b>gulp-folder</b></a>
          <a href="https://github.com/microlv/ngMessage" className="project-primary"><b>ngMessage</b></a>

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

React.render(<App/>, document.body);

function round(t) {
  return t[parseInt(Math.random(t.length) * 10)];
};
