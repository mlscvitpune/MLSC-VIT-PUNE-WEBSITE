import React from 'react';
import Tilt from 'react-parallax-tilt';

function CyberSec() {
  return (
    <div>
      <div className="our-team pt-2" id="cyber-sec">
        Cyber Security
      </div>
      <div className="row">
        <div className="your-element col-12 col-md-6 text-center py-4">
          <Tilt
            {...{
              tiltAngleYInitial: 10,
              transitionEasing: 'cubic-bezier(.05,.1,.32,.99)',
            }}
          >
            <div className="member-image m18 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Junaid Mujawar</div>
              <div className="position">Security Specialist</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://www.instagram.com/_junaidmujawar">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="www.linkedin.com/in/junaid-mujawar-8278071b7">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://github.com/JunaidMujawar">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Tilt>
        </div>

        <div className="your-element col-12 col-md-5 text-center py-4">
          <Tilt
            {...{
              tiltAngleYInitial: 10,
              transitionEasing: 'cubic-bezier(.05,.1,.32,.99)',
            }}
          >
            <div className="member-image m19 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Harsh Satdeve</div>
              <div className="position">Security Specialist</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://www.instagram.com/harsh_satdeve">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://www.linkedin.com/in/harsh-satdeve-559245195">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://github.com/Harsh-Satdeve">
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

export default CyberSec;
