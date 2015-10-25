var TimelineSelector = React.createClass({
  statics: {
    willTransitionTo: function (transition, params, query, callback) {
      console.log('willTransitionTo');
      callback();
    },
    willTransitionFrom: function (transition, component) {
      console.log('willTransitionFrom');
    }
  },
  getInitialState: function () {
    return {
      items: []
    };
  },
  componentDidMount: function () {
    this.fetchData(this.props.params.categoryId);
  },
  componentWillReceiveProps: function (nextProps) {
    console.log('1');
    this.fetchData(nextProps.params.categoryId);
  },
  shouldComponentUpdate: function (nextProps, nextState) {
    console.log('2');
    return true;
  },
  componentWillUpdate: function (nextProps, nextState) {
    console.log('3');
  },
  componentDidUpdate: function (prevProps, prevState) {
    console.log('4');
  },
  fetchData: function (categoryId) {
    $.get('/api/getArticleByCategoryId/' + categoryId).then(function (data) {
      this.setState({
        items: data.data
      });
    }.bind(this));
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