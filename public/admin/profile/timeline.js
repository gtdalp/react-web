(function () {
  'use strict';

  var Timeline = React.createClass({
    render: function () {
      return <section className="content">
        <div className="row">
          <div className="col-md-12">
            <ul className="timeline">
              <li className="time-label">
                  <span className="bg-red">
                    10 Feb. 2014
                  </span>
              </li>
              <li>
                <i className="fa fa-envelope bg-blue"></i>

                <div className="timeline-item">
                  <span className="time"><i className="fa fa-clock-o"></i> 12:05</span>

                  <h3 className="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

                  <div className="timeline-body">
                    Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                    weebly ning heekya handango imeem plugg dopplr jibjab, movity
                    jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                    quora plaxo ideeli hulu weebly balihoo...
                  </div>
                  <div className="timeline-footer">
                    <a className="btn btn-primary btn-xs">Read more</a>
                    <a className="btn btn-danger btn-xs">Delete</a>
                  </div>
                </div>
              </li>
              <li>
                <i className="fa fa-user bg-aqua"></i>

                <div className="timeline-item">
                  <span className="time"><i className="fa fa-clock-o"></i> 5 mins ago</span>

                  <h3 className="timeline-header no-border"><a href="#">Sarah Young</a> accepted your friend request
                  </h3>
                </div>
              </li>
              <li>
                <i className="fa fa-comments bg-yellow"></i>

                <div className="timeline-item">
                  <span className="time"><i className="fa fa-clock-o"></i> 27 mins ago</span>

                  <h3 className="timeline-header"><a href="#">Jay White</a> commented on your post</h3>

                  <div className="timeline-body">
                    Take me to your leader!
                    Switzerland is small and neutral!
                    We are more like Germany, ambitious and misunderstood!
                  </div>
                  <div className="timeline-footer">
                    <a className="btn btn-warning btn-flat btn-xs">View comment</a>
                  </div>
                </div>
              </li>

              <li className="time-label">
                  <span className="bg-green">
                    3 Jan. 2014
                  </span>
              </li>
              <li>
                <i className="fa fa-camera bg-purple"></i>

                <div className="timeline-item">
                  <span className="time"><i className="fa fa-clock-o"></i> 2 days ago</span>

                  <h3 className="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>

                  <div className="timeline-body">
                    <img src="http://placehold.it/150x100" alt="..." className="margin"/>
                    <img src="http://placehold.it/150x100" alt="..." className="margin"/>
                    <img src="http://placehold.it/150x100" alt="..." className="margin"/>
                    <img src="http://placehold.it/150x100" alt="..." className="margin"/>
                  </div>
                </div>
              </li>
              <li>
                <i className="fa fa-video-camera bg-maroon"></i>

                <div className="timeline-item">
                  <span className="time"><i className="fa fa-clock-o"></i> 5 days ago</span>

                  <h3 className="timeline-header"><a href="#">Mr. Doe</a> shared a video</h3>

                  <div className="timeline-body">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/tMWkeBIohBs"
                              frameborder="0" allowfullscreen></iframe>
                    </div>
                  </div>
                  <div className="timeline-footer">
                    <a href="#" className="btn btn-xs bg-maroon">See comments</a>
                  </div>
                </div>
              </li>
              <li>
                <i className="fa fa-clock-o bg-gray"></i>
              </li>
            </ul>
          </div>
        </div>
      </section>;
    }
  });

  React.registerComponent('Timeline', <Timeline/>);

})();