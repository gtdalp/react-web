/**
 * Created by Microlv on 2015/10/26.
 */
var ArticleItem = React.createClass({
  render: function () {
    var lis = this.props.items.map(function (item) {
      return <div className="article">
        <div className="article-title">{item.title}</div>
        <div>
          <p>
            {item.content}
          </p>
        </div>
      </div>;
    });

    return <div>{lis}</div>;
  }
});


var Article = React.createClass({
  getInitialState: function () {
    return {
      items: []
    };
  },
  componentDidMount: function () {
//    $.get('/api/getArticleList').then(function (data) {
//      this.setState({
//        items: data.data
//      });
//    }.bind(this));
    this.setState({
      items: [{title: 'Xcode', content: '到目前为止，每一个组件都根据自己的 props 渲染了自己一次。 props 是不可变的：它们从父组件传递过来'},
        {title: 'Xcode', content: '到目前为止，每一个组件都根据自己的 props 渲染了自己一次。 props 是不可变的：它们从父组件传递过来'},
        {title: 'Xcode', content: '到目前为止，每一个组件都根据自己的 props 渲染了自己一次。 props 是不可变的：它们从父组件传递过来'},
        {title: 'Xcode', content: '到目前为止，每一个组件都根据自己的 props 渲染了自己一次。 props 是不可变的：它们从父组件传递过来'},
        {title: 'Xcode', content: '到目前为止，每一个组件都根据自己的 props 渲染了自己一次。 props 是不可变的：它们从父组件传递过来'},
        {title: 'Xcode', content: '到目前为止，每一个组件都根据自己的 props 渲染了自己一次。 props 是不可变的：它们从父组件传递过来'},
        {title: 'Xcode', content: '到目前为止，每一个组件都根据自己的 props 渲染了自己一次。 props 是不可变的：它们从父组件传递过来'}]
    });
  },
  render: function () {
    return <ArticleItem items={this.state.items}/>;
  }
});

React.render(<Article/>, document.getElementById('article'));