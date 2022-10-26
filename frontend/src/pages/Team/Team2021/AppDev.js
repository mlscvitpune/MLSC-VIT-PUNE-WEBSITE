import React from 'react';
import Tilt from 'react-parallax-tilt';

function AppDev() {
  return (
    <div>
      <div className="our-team pt-2" id="app-dev">
        App Development
      </div>
      <div className="row">
        <div className="your-element col-12 col-md-13 text-center py-4">
          <Tilt
            {...{
              tiltAngleYInitial: 10,
              transitionEasing: 'cubic-bezier(.05,.1,.32,.99)',
            }}
          >
            <div className="member-image m10 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Shaunak Mahajan</div>
              <div className="position">AppDev Lead</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://www.instagram.com/shaunak_1112">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://www.linkedin.com/in/shaunak-mahajan-4a5462197">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://github.com/Shaunak1112">
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
        <div className="your-element col-12 col-md-6 text-center py-4">
          <Tilt
            {...{
              tiltAngleYInitial: 10,
              transitionEasing: 'cubic-bezier(.05,.1,.32,.99)',
            }}
          >
            <div className="member-image m11 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Shrushti Bhattad</div>
              <div className="position">Co-ordinator</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://www.instagram.com/shrushtibhattad">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://www.linkedin.com/in/shrushti-bhattad">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://github.com/ShrushtiHB">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Tilt>
        </div>

        <div className="your-element col-12 col-md-6 text-center py-4">
          <Tilt
            {...{
              tiltAngleYInitial: 10,
              transitionEasing: 'cubic-bezier(.05,.1,.32,.99)',
            }}
          >
            <div className="member-image m13 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Neilkrishna Kabara</div>
              <div className="position">Co-ordinator</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://www.instagram.com/neilll____">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://www.linkedin.com/in/neilkrishna-kabara-672906204/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://github.com/neil0504">
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

export default AppDev;
