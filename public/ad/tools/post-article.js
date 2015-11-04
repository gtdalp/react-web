/**
 * Created by Microlv on 2015/10/12.
 */
(function () {
  'use strict';
  var MarkdownSelector = component.MarkdownSelector;
  //var urlCategory = '';
  var _id;
  var PostCategorySelector = React.createClass({
    componentDidUpdate: function () {
      var category = this.props.category;
      var index = 0;
      if (category) {
        index = _.findIndex(this.props.items, function (k) {
          return category === k._id;
        });
        this.getDOMNode().selectedIndex = ++index;
      }
    },
    render: function () {
      var lis = this.props.items.map(function (item) {
        return <option value={item._id}>{item.name}</option>;
      });
      lis.unshift(<option value="0">Please Select A Category!</option>);
//      if (urlCategory) {
//        React.findDOMNode(this).value = urlCategory;
//      }
      return <select className="form-control">
        {lis}
      </select>;
    }
  });

  var PostArticleSelector = React.createClass({
    accept: function () {
      $.ajax({
        url: '/api/saveArticle',
        type: 'POST',
        data: {
          _id: !!_id ? _id : '',
          title: React.findDOMNode(this.refs.title).value,
          category: React.findDOMNode(this.refs.category).value,
          content: $('#markdown-control').val(),
          origin: true
        }
      }).then(function (response) {

      }.bind(this));
    },
    cancel: function () {
      service.showDialog();
//      React.findDOMNode(this.refs.title).value = '';
//      React.findDOMNode(this.refs.category).value = '';
//      $('#markdown-control').val('');
    },
    getInitialState: function () {
      return {
        categoryItems: [],
        detail: {}
      };
    },
    componentDidMount: function () {
      this.fetchData();
    },
    fetchData: function () {
      $.get('/api/getCategory').then(function (response) {
        this.setState({categoryItems: response.data});
        if (this.props.params.id) {
          _id = this.props.params.id;
          $.get('/api/getArticleDetailById/' + _id).then(function (response) {
            var data = response.data;
            data.date = data.date.toFormatLocaleString();

            this.setState({
              detail: data
            });
          }.bind(this));
        }
      }.bind(this));

    },
    render: function () {
      return <section className="content">
        <div className="row">
          <div className="col-md-12">
            <div className="box box-warning">
              <div className="box-header with-border">
                <h3 className="box-title">Post Article</h3>
              </div>
              <div className="box-body">
                <form role="form">
                  <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" placeholder="Enter ..." ref="title"
                           value={this.state.detail.title}/>
                  </div>

                  <div className="form-group">
                    <label>Select</label>
                    <PostCategorySelector items={this.state.categoryItems} ref="category"
                                          category={this.state.detail.category}/>
                  </div>

                  <div className="form-group">
                    <label>Content</label>
                    <MarkdownSelector content={this.state.detail.content}/>
                  </div>
                  <div>
                    <button className="btn bg-orange btn-flat margin" onClick={this.accept}>Accept</button>
                    <button className="btn bg-orange btn-flat margin" onClick={this.cancel}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>;
    }
  });

  component.PostArticleSelector = PostArticleSelector;

})();