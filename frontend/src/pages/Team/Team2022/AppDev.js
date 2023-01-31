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
            <div className="member-image m12 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Neilkrishna Kabara</div>
              <div className="position">AppDev Lead</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://twitter.com/neil05042">
                      <i className="fab fa-twitter"></i>
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
      <div className="row">
        <div className="your-element col-12 col-md-4 text-center py-4">
          <Tilt
            {...{
              tiltAngleYInitial: 10,
              transitionEasing: 'cubic-bezier(.05,.1,.32,.99)',
            }}
          >
            <div className="member-image m13 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Ankit Gaikwad</div>
              <div className="position">Co-ordinator</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://twitter.com/ankit_gaikwad_">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://www.linkedin.com/in/ankit-gaikwad-623190215">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://github.com/MAX-XD">
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
            <div className="member-image m14 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Himanshu Bhatia</div>
              <div className="position">Co-ordinator</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://twitter.com/Himansh80650216">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://www.linkedin.com/in/himanshu-bhatia-03494a1b6/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://github.com/himanshubhatia2910">
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
            <div className="member-image m15 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Maruti Patil</div>
              <div className="position">Co-ordinator</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://twitter.com/Maruti54">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://www.linkedin.com/in/marutipatil54">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://github.com/Maruti54">
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
