(function () {
  'use strict';

  var Route = ReactRouter.Route;
  var RouteHandler = ReactRouter.RouteHandler;
  var DefaultRoute = ReactRouter.DefaultRoute;
  var NotFoundRoute = ReactRouter.NotFoundRoute;

  var TimelineSelector = component.TimelineSelector;
  var ProfileSelector = component.ProfileSelector;
  var PostArticleSelector = component.PostArticleSelector;
  var ArticleDetailSelector = component.ArticleDetailSelector;
  var Error500 = component.Error500;
  var HeaderSelector = component.HeaderSelector;
  var SideBarSelector = component.SideBarSelector;
  var FooterSelector = component.FooterSelector;
  var NavMapSelector = component.NavMapSelector;

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
    render: function () {
      return (
        <div className="wrapper">
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
    <Route name='articledetail' path="articledetail/:id" handler={ArticleDetailSelector}/>

    <NotFoundRoute handler={Error500}/>
  </Route>, ReactRouter.HashLocation, function (Root) {
    React.render(<Root/>, document.body);
  });

})();

