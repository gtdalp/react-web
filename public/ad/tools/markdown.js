(function () {
  'use strict';

  var MarkdownSelector = React.createClass({
    componentDidUpdate: function () {
      if (this.props.content) {
        markdown.data('wysihtml5').editor.setValue(this.props.content);
      }
    },
    componentDidMount: function () {
//      var editor = new EpicEditor({
//        container: 'epiceditor',
//        basePath: '/lib/EpicEditor/epiceditor/themes',
//        theme: {
//          base: '/base/epiceditor.css',
//          preview: '/preview/preview-dark.css',
//          editor: '/editor/epic-dark.css'
//        }
//      }).load();
      var markdown = $('#markdown-control');
      markdown.wysihtml5();


    },
    render: function () {
      return <div>
        <textarea id="markdown-control" placeholder="Enter text ..." className="markdown-control"></textarea>
      </div>;
    }
  });
//  <div id="epiceditor" className="markdown-control"></div>

  component.MarkdownSelector = MarkdownSelector;


})();