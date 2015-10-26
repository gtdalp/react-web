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

var ArticleItem = React.createClass({
  render: function () {
    var lis = this.props.items.map(function (item) {
      return <div className="article animated slideInUp">
        <div className={"article-title "+ round(colors)}>{item.title}
          <div>
            <i className="fa fa-clock-o"></i>
            <span>
              {item.date.toLocaleDateString()}
            </span>
          </div>
        </div>
        <div>
          <p>
            {item.content}
          </p>
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
          <div className="img-circle">
            <img className="img-circle" src="images/me11.jpg"/>
          </div>
        </div>
        <div className="row text-center profile-info-detail">
          <h3 className="profile-username">hello</h3>

          <p className="text-muted text-center">hello</p>

          <a href="#" className="btn btn-primary btn-block"><b>hello</b></a>
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
}
