'use strict';

var ReactDom = require('react-dom');

var Error500 = ReactDom.createClass({
  render: function () {
    return <section className="content">
      <div className="error-page">
        <h2 className="headline text-red">500</h2>

        <div className="error-content">
          <h3><i className="fa fa-warning text-red"></i> Oops! Something went wrong.</h3>

        </div>
      </div>
    </section>;
  }
});

//  component.Error500 = Error500;

module.exports = Error500;