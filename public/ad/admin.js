var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var DefaultRoute = ReactRouter.DefaultRoute;
var NotFoundRoute = ReactRouter.NotFoundRoute;

var TimelineSelector = React.component.TimelineSelector;
var ProfileSelector = React.component.ProfileSelector;

var About = React.createClass({
  render: function () {
    return <h2>About</h2>;
  }
});

var NotFound = React.createClass({
  render: function () {
    return <h2>NotFound</h2>;
  }
});

var App = React.createClass({
  render: function () {
    return (
      <div className="content-wrapper">
        <div id="navigator-map"></div>
        <div id="content">
          <RouteHandler/>
        </div>
      </div>
    )
  }
});

//function render() {
//  var route = window.location.hash.substr(1);
//  React.render(<App route={route}/>, document.body);
//}

ReactRouter.run(<Route path="/" handler={App}>

  <DefaultRoute handler={ProfileSelector}/>

  <Route path="profile" handler={ProfileSelector}/>
  <Route path="timeline/:categoryId" handler={TimelineSelector}/>


  <NotFoundRoute handler={NotFound}/>
</Route>, ReactRouter.HashLocation, function (Root) {
  React.render(<Root/>, document.getElementById('frame-content'));
});
