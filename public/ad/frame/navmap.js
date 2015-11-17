'use strict';

var NavMapSelector = React.createClass({
  getInitialState: function () {
    return {
      category: '',
      first: '',
      second: '',
      third: ''
    };
  },
  componentWillReceiveProps: function (nextProps) {
    console.log('nav map!!!');
  },
  render: function () {
    return <section className="content-header">
      <h1>
        {this.state.category}
      </h1>
      <ol className="breadcrumb">
        <li><a href="#"><i className="fa fa-dashboard"></i>{this.state.first}</a></li>
        <li><a href="#">{this.state.second}</a></li>
        <li className="active">{this.state.third}</li>
      </ol>
    </section>;
  }
});

export var NavMapSelector;
