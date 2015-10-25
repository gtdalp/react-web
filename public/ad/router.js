(function () {
  'use strict';

  var Route = ReactRouter.Route;
  var RouteHandler = ReactRouter.RouteHandler;
  var DefaultRoute = ReactRouter.DefaultRoute;
  var NotFoundRoute = ReactRouter.NotFoundRoute;

  var TimelineSelector = React.component.TimelineSelector;
  var ProfileSelector = React.component.ProfileSelector;
  var PostArticleSelector = React.component.PostArticleSelector;
  var Error500 = React.component.Error500;
  var HeaderSelector = React.component.HeaderSelector;
  var SideBarSelector = React.component.SideBarSelector;
  var FooterSelector = React.component.FooterSelector;
  var NavMapSelector = React.component.NavMapSelector;

  var ContentSelector = React.createClass({
    render: function () {
      return <div id="frame-content">
        <div className="content-wrapper">
          <NavMapSelector/>

          <div id="content">
            <RouteHandler/>
          </div>
        </div>
      </div>
    }
  });

  var App = React.createClass({
    scrollBehavior: ReactRouter.ScrollToTopBehavior,
    render: function () {
      return (
        <div>
          <HeaderSelector/>
          <SideBarSelector/>
          <ContentSelector/>
          <FooterSelector/>
        </div>
      )
    }
  });

  ReactRouter.run(<Route path="/" handler={App}>

    <DefaultRoute handler={ProfileSelector}/>

    <Route name='profile' path="profile" handler={ProfileSelector}/>
    <Route name='timeline' path="timeline/:categoryId" handler={TimelineSelector}/>
    <Route name='postarticle' path="postarticle" handler={PostArticleSelector}/>

    <NotFoundRoute handler={Error500}/>
  </Route>, ReactRouter.HashLocation, function (Root) {
    React.render(<Root/>, document.body);
  });

})();

