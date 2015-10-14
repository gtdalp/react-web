/**
 * Created by Microlv on 2015/10/12.
 */
(function () {
  'use strict';

  var PostArticleSelectOption = React.createClass({
    render: function () {
      var that = this;
      var lis = this.props.items.map(function (item) {
        return <options>{item.name}</options>;
      });
      return <select className="form-control">
        {lis}
      </select>;
    }
  });

  var PostArticle = React.createClass({
    getInitialState: function () {
      return {items: []};
    },
    componentDidMount: function () {
      this.fetchData();
    },
    fetchData: function () {
      var that = this;
      $.get('/api/getCategory').then(function (data) {
        that.setState({items: data.data});
      }.bind(this));
    },
    render: function () {
      return <section className="content">
        <div className="row col-md-12">
          <div className="box box-warning">
            <div className="box-header with-border">
              <h3 className="box-title">Post Article</h3>
            </div>
            <div className="box-body">

              <div className="form-group">
                <label>Text</label>
                <input type="text" className="form-control" placeholder="Enter ..."/>
              </div>

              <div className="form-group">
                <label>Select Category</label>
                <PostArticleSelectOption items={this.state.items}/>
              </div>

              <div className="form-group">
                <label>Textarea</label>
                <textarea className="form-control" rows="3" placeholder="Enter ..."></textarea>
              </div>

            </div>
          </div>
        </div>
      </section>;
    }
  });

  React.registerComponent('PostArticle', <PostArticle/>);

})();