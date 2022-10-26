import React from 'react';
import Tilt from 'react-parallax-tilt';

function NeoTech() {
  return (
    <div>
      <div className="our-team pt-2" id="neo-tech">
        Neo Tech
      </div>
      <div className="row">
        {/* MISSING------------------------------------------------------------------- */}
        <div className="your-element col-12 col-md-13 text-center py-4">
          <Tilt
            {...{
              tiltAngleYInitial: 10,
              transitionEasing: 'cubic-bezier(.05,.1,.32,.99)',
            }}
          >
            <div className="member-image m23 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Sphurthi Bhat</div>
              <div className="position">NeoTech Lead</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  {/* <li className="list-inline-item social-icons">
                    <a href="">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li> */}
                  <li className="list-inline-item social-icons">
                    <a href="https://github.com/">
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
            <div className="member-image m25 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Avinash Dhakne</div>
              <div className="position">Co-ordinator</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://www.instagram.com/avinash_s_dhakne">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://www.linkedin.com/in/avinash-dhakne-a95909205">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://github.com/avinashdhakne">
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
            <div className="member-image m26 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Disha Khater</div>
              <div className="position">Co-ordinator</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://www.instagram.com/dishakhater_21">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://www.linkedin.com/in/disha-khater-925471201">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://github.com/disha2105">
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
            <div className="member-image m27 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Rutvik Manchekar</div>
              <div className="position">Co-ordinator</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://www.instagram.com/rutvik070902">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://www.linkedin.com/in/rutvik-manchekar-7a9513206/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://github.com/rutvik0709">
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

export default NeoTech;
