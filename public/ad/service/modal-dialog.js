(function () {
  'use strict';

  var ModalDialog = React.createClass({
    render: function () {
      return <div id="modal-dialog" className="example-modal">
        <div className="modal modal-success">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                  aria-hidden="true">¡Á</span>
                </button>
                <h4 className="modal-title">Modal Success</h4>
              </div>
              <div className="modal-body">
                <p>One fine body¡­</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-outline">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>;
    }
  });

  component.ModalDialog = ModalDialog;

  service.showDialog = function () {
    React.render(<ModalDialog />, document.getElementById('content'));
  };

  service.hideDialog = function () {
    $('#modal-dialog').remove();
  };

})();