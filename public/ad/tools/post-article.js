/**
 * Created by Microlv on 2015/10/12.
 */
(function () {
  'use strict';
  var MarkdownSelector = component.MarkdownSelector;

  var PostCategorySelector = React.createClass({
    render: function () {
      var lis = this.props.items.map(function (item) {
        return <option value={item._id}>{item.name}</option>;
      });
      lis.unshift(<option value="0">Please Select A Category!</option>)
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
          $.get('/api/getArticleDetailById/' + id).then(function (response) {
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
                    <input type="text" className="form-control" placeholder="Enter ..." ref="title" val={this.state.detail.title}/>
                  </div>

                  <div className="form-group">
                    <label>Select</label>
                    <PostCategorySelector items={this.state.categoryItems} detail={this.props.params.id}
                                          ref="category"/>
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