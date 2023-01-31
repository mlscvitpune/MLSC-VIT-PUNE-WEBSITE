import React from 'react';
import Tilt from 'react-parallax-tilt';

function IOT() {
  return (
    <div>
      <div className="our-team pt-2" id="iot">
        Internet of Things
      </div>
      <div className="row">
                <div className="your-element col-12 col-md-13 text-center py-4">
          <Tilt
            {...{
              tiltAngleYInitial: 10,
              transitionEasing: 'cubic-bezier(.05,.1,.32,.99)',
            }}
          >
            <div className="member-image m22 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Abu Ansari</div>
              <div className="position">IoT Lead</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://twitter.com/home">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="http://www.linkedin.com/in/abu-dujana-738818200">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://github.com/Plagueowl">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
      <div className="row">
        <div className="your-element col-12 col-md-4 text-center py-4">
          <Tilt
            {...{
              tiltAngleYInitial: 10,
              transitionEasing: 'cubic-bezier(.05,.1,.32,.99)',
            }}
          >
            <div className="member-image m23 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Om Dhumal</div>
              <div className="position">Co-ordinator</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://twitter.com/_omdhumal">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://github.com/a-u-m">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://github.com/a-u-m">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Tilt>
        </div>

        <div className="your-element col-12 col-md-4 text-center py-4">
          <Tilt
            {...{
              tiltAngleYInitial: 10,
              transitionEasing: 'cubic-bezier(.05,.1,.32,.99)',
            }}
          >
            <div className="member-image m24 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Amey Dhuri</div>
              <div className="position">Co-ordinator</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://www.twitter.com/dhuriamey02/">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://www.linkedin.com/in/dhuriamey02/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://github.com/SayuriYuto">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Tilt>
        </div>

        <div className="your-element col-12 col-md-4 text-center py-4">
          <Tilt
            {...{
              tiltAngleYInitial: 10,
              transitionEasing: 'cubic-bezier(.05,.1,.32,.99)',
            }}
          >
            <div className="member-image m25 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Bhavya Shah</div>
              <div className="position">Co-ordinator</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://twitter.com/BhavyaBh289?s=09">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://www.linkedin.com/in/bhavya-shah-9401a7233">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                   <li className="list-inline-item social-icons">
                    <a href="https://github.com/BhavyaBh289">
                      <i className="fab fa-github"></i>
                    </a>
                  </li> 
                </ul>
              </div>
            </div>
          </Tilt>
        </div>
      </div>

    </div>
  );
}

export default IOT;