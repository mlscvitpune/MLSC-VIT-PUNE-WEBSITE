import React from 'react';
import Tilt from 'react-parallax-tilt';

function ContentMultimedia() {
  return (
    <div>
      <div className="our-team pt-2" id="contentmultimedia">
        Content and Multimedia
      </div>
      <div className="row">
        <div className="your-element col-12 col-md-3 text-center py-4">
          <Tilt
            {...{
              tiltAngleYInitial: 10,
              transitionEasing: 'cubic-bezier(.05,.1,.32,.99)',
            }}
          >
            <div className="member-image m31 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Isha Deshpande</div>
              <div className="position">Content Creator</div>
              <div>
                <ul className="list-inline">
                  {/* <li className="list-inline-item social-icons">
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li> */}
                  <li className="list-inline-item social-icons">
                    <a href="https://www.linkedin.com/in/isha-deshpande-a0708420b">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  {/* <li className="list-inline-item social-icons">
                    <a href="https://github.com/">
                      <i className="fab fa-github"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </Tilt>
        </div>

        <div className="your-element col-12 col-md-3 text-center py-4">
          <Tilt
            {...{
              tiltAngleYInitial: 10,
              transitionEasing: 'cubic-bezier(.05,.1,.32,.99)',
            }}
          >
            <div className="member-image m32 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Arya Mehta</div>
              <div className="position">Content Creator</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://www.instagram.com/arya.mehtaaa">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  {/* <li className="list-inline-item social-icons">
                      <a href="https://www.linkedin.com/in/kaushal-gore-a97862157">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li> */}
                  <li className="list-inline-item social-icons">
                    <a href="https://github.com/AryaMehta03">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Tilt>
        </div>
        <div className="your-element col-12 col-md-3 text-center py-4">
          <Tilt
            {...{
              tiltAngleYInitial: 10,
              transitionEasing: 'cubic-bezier(.05,.1,.32,.99)',
            }}
          >
            <div className="member-image m29 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Vedant Gokhale</div>
              <div className="position">Content Designer</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://www.instagram.com/gokhalevedant06">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://www.linkedin.com/in/Vedant-Gokhale">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://github.com/gokhalevedant06">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Tilt>
        </div>

        <div className="your-element col-12 col-md-3 text-center py-4">
          <Tilt
            {...{
              tiltAngleYInitial: 10,
              transitionEasing: 'cubic-bezier(.05,.1,.32,.99)',
            }}
          >
            <div className="member-image m30 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Kaushal Gore</div>
              <div className="position">Content Designer</div>
              <div>
                <ul className="list-inline">
                  {/* <li className="list-inline-item social-icons">
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li> */}
                  <li className="list-inline-item social-icons">
                    <a href="https://www.linkedin.com/in/kaushal-gore-a97862157">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://github.com/Kaushal-Is-Here">
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

export default ContentMultimedia;
