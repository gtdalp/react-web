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

  var TimeLineItem = React.createClass({
    timeLabel: function (item) {
      return <div className="time-label">
        <span className={round(colors)}>
          {item.date.toLocaleDateString()}
        </span>
        <i className={'fa '+ round(icons) + ' '+ round(colors)}></i>
      </div>;
    },
    timeItem: function (item) {
      return <div className="timeline-item">
        <span className="time"><i className="fa fa-clock-o"></i>{item.date.toLocaleTimeString()}</span>

        <h3 className="timeline-header"><a href="#">{item.title}</a>{item.origin}</h3>

        <div className="timeline-body">
          {item.content}...
        </div>
        <div className="timeline-footer">
          <a className="btn btn-primary btn-xs">Read more</a>
        </div>
      </div>;
    },
    render: function () {
      var lis = this.props.items.map(function (item) {

        return <li>
          {this.timeLabel(item)}
          {this.timeItem(item)}
        </li>;
      }.bind(this));

      return <ul className="timeline">
        {lis}
      </ul>;
    }
  });

  var Timeline = React.createClass({
    getInitialState: function () {
      return {items: []};
    },
    componentDidMount: function () {
      this.fetchData();
    },
    fetchData: function () {
      $.get('/api/getArticleList').then(function (data) {
        this.setState({
          items: data.data
        });
      }.bind(this));
    },
    render: function () {
      return <section className="content">
        <div className="row">
          <div className="col-md-12">
            <TimeLineItem items={this.state.items}/>
          </div>
        </div>
      </section>;
    }
  });

  React.registerComponent('Timeline', <Timeline/>);

  function round(t) {
    return t[parseInt(Math.random(t.length) * 10)];
  }

})();