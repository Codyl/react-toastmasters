import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-4 col-sm-2 offset-1">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <a href="https://www.toastmasters.org/pathways-overview">
                  Pathways
                </a>
              </li>
              <li>
                <a href="https://zoom.us/j/455502545?pwd=cGJXUFVMK1RveFZkemZmYkxMb0x6dz09">
                  Zoom
                </a>
              </li>
              <li>
                <a href="https://midwaytm.toastmastersclubs.org/">Old website</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-3 text-center">
            <h5>Social</h5>
            <a
              className="btn btn-social-icon btn-facebook"
              href="https://www.facebook.com/Midwaycollegetoastmasters">
              <i className="fa fa-facebook" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-twitter"
              href="https://twitter.com/midwaykytoastm1">
              <i className="fa fa-twitter" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-google"
              href="https://www.youtube.com/channel/UCJCnYI2PsT6pXQkGtsh9D1w">
              <i className="fa fa-youtube" />
            </a>
          </div>
          <div className="col-sm-4 text-center">
            <a role="button" className="btn btn-link" href="tel:+8599832709">
              <i className="fa fa-phone" /> 859-983-2709
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:1990654@toastmastersclubs.com">
              <i className="fa fa-envelope-o" /> 1990654@toastmastersclubs.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;