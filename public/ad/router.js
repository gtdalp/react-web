var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var DefaultRoute = ReactRouter.DefaultRoute;
var NotFoundRoute = ReactRouter.NotFoundRoute;

var TimelineSelector = React.component.TimelineSelector;
var ProfileSelector = React.component.ProfileSelector;
var PostArticle = React.component.PostArticle;
var Error500 = React.component.Error500;

var App = React.createClass({
  scrollBehavior: ReactRouter.ScrollToTopBehavior,
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


ReactRouter.run(<Route path="/" handler={App}>

  <DefaultRoute handler={ProfileSelector}/>

  <Route name='profile' path="profile" handler={ProfileSelector}/>
  <Route name='timeline' path="timeline/:categoryId" handler={TimelineSelector}/>
  <Route name='post-article' path="postarticle" handler={PostArticle}/>

  <NotFoundRoute handler={Error500}/>
</Route>, ReactRouter.HashLocation, function (Root) {
  React.render(<Root/>, document.getElementById('frame-content'));
});
