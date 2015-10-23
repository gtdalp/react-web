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

  var TimeLineItemSelector = React.createClass({
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

  var TimelineSelector = React.createClass({
//    statics: {
//      willTransitionTo: function (transition, params, query, callback) {
//        console.log('willTransitionTo');
//        callback();
//      },
//      willTransitionFrom: function (transition, component) {
//        console.log('willTransitionFrom');
//      }
//    },
    getInitialState: function () {
      return {
        items: []
      };
    },
    componentDidMount: function () {
      this.fetchData();
    },
//    componentWillReceiveProps: function (nextProps) {
//      this.fetchData();
//    },
//    shouldComponentUpdate: function (nextProps, nextState) {
//      console.log(nextProps);
//      return true;
//    },
//    componentWillUpdate: function (nextProps, nextState) {
//      console.log(nextProps);
//    },
//    componentDidUpdate: function (prevProps, prevState) {
//      console.log(prevState);
//    },
    fetchData: function () {
      console.log('timeline');
      if (this.props.params) {
        $.get('/api/getArticleByCategoryId/' + this.props.params.categoryId).then(function (data) {
          this.setState({
            items: data.data
          });
        }.bind(this));
      }
    },
    render: function () {
      return <section className="content">
        <div className="row">
          <div className="col-md-12">
            <TimeLineItemSelector items={this.state.items}/>

          </div>
        </div>
      </section>;
    }
  });

  //React.registerComponent('TimelineSelector', TimelineSelector);
  React.component.TimelineSelector = TimelineSelector;

  function round(t) {
    return t[parseInt(Math.random(t.length) * 10)];
  }

})();