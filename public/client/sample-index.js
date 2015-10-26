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
      items: [{title: 'Xcode', content: '��ĿǰΪֹ��ÿһ������������Լ��� props ��Ⱦ���Լ�һ�Ρ� props �ǲ��ɱ�ģ����ǴӸ�������ݹ���'},
        {title: 'Xcode', content: '��ĿǰΪֹ��ÿһ������������Լ��� props ��Ⱦ���Լ�һ�Ρ� props �ǲ��ɱ�ģ����ǴӸ�������ݹ���'},
        {title: 'Xcode', content: '��ĿǰΪֹ��ÿһ������������Լ��� props ��Ⱦ���Լ�һ�Ρ� props �ǲ��ɱ�ģ����ǴӸ�������ݹ���'},
        {title: 'Xcode', content: '��ĿǰΪֹ��ÿһ������������Լ��� props ��Ⱦ���Լ�һ�Ρ� props �ǲ��ɱ�ģ����ǴӸ�������ݹ���'},
        {title: 'Xcode', content: '��ĿǰΪֹ��ÿһ������������Լ��� props ��Ⱦ���Լ�һ�Ρ� props �ǲ��ɱ�ģ����ǴӸ�������ݹ���'},
        {title: 'Xcode', content: '��ĿǰΪֹ��ÿһ������������Լ��� props ��Ⱦ���Լ�һ�Ρ� props �ǲ��ɱ�ģ����ǴӸ�������ݹ���'},
        {title: 'Xcode', content: '��ĿǰΪֹ��ÿһ������������Լ��� props ��Ⱦ���Լ�һ�Ρ� props �ǲ��ɱ�ģ����ǴӸ�������ݹ���'}]
    });
  },
  render: function () {
    return <ArticleItem items={this.state.items}/>;
  }
});

React.render(<Article/>, document.getElementById('article'));