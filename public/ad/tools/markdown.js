(function () {
  'use strict';

  var MarkdownSelector = React.createClass({
    componentDidMount: function () {
      var editor = new EpicEditor({
        container: 'epiceditor',
        basePath: '/lib/EpicEditor/epiceditor/themes',
        theme: {
          base: '/base/epiceditor.css',
          preview: '/preview/preview-dark.css',
          editor: '/editor/epic-dark.css'
        }
      }).load();
    },
    render: function () {
      return <div>
        <div id="epiceditor" className="markdown-control"></div>
      </div>;
    }
  });

  React.component.MarkdownSelector = MarkdownSelector;


})();