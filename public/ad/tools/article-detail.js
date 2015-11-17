'use strict';

var ArticleDetailSelector = React.createClass({
  getInitialState: function () {
    return {
      detail: {}
    };
  },
  componentDidMount: function () {
    this.fetchData(this.props.params.id);
  },
  fetchData: function (id) {
    $.get('/api/getArticleDetailById/' + id).then(function (response) {
      var data = response.data;
      data.date = data.date.toFormatLocaleString();

      this.setState({
        detail: data
      });
    }.bind(this));
  },
  render: function () {
    return <section className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="box box-primary">
            <div className="box-header with-border">
              <span>Visitor: {this.state.detail.visitCount}</span>

              <div className="box-tools pull-right">
                <a href="#" className="btn btn-box-tool" data-toggle="tooltip" title="Previous">
                  <i className="fa fa-chevron-left"></i></a>
                <a href="#" className="btn btn-box-tool" data-toggle="tooltip" title="Next">
                  <i className="fa fa-chevron-right"></i></a>
              </div>
            </div>
            <div className="box-body no-padding">
              <div className="mailbox-read-info">
                <h3>{this.state.detail.title}</h3>
                <h5>From: microlv<span className="mailbox-read-time pull-right">{this.state.detail.date}</span></h5>
              </div>
              <div className="mailbox-read-message">
                {this.state.detail.content}
              </div>

              <div className="box-footer">
                <div className="pull-right">
                  <button className="btn btn-default"><i className="fa fa-reply"></i> Reply</button>
                  <button className="btn btn-default"><i className="fa fa-share"></i> Forward</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
});

//component.ArticleDetailSelector = ArticleDetailSelector;

export var ArticleDetailSelector;