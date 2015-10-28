(function () {
  'use strict';

  var MarkdownSelector = React.createClass({
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
      $('#markdown-control').wysihtml5();
    },
    render: function () {
      return <div>
        <textarea id="markdown-control" placeholder="Enter text ..." className="markdown-control"></textarea>
      </div>;
    }
  });
//  <div id="epiceditor" className="markdown-control"></div>

  React.component.MarkdownSelector = MarkdownSelector;


})();