import React from 'react';
import Tilt from 'react-parallax-tilt';

function NeoTech() {
  return (
    
    <div>
      <div className="our-team pt-2" id="neo-tech">
        Neo Tech
      </div>
      <div className="row">
         <div className="your-element col-12 col-md-13 text-center py-4">
          <Tilt
            {...{
              tiltAngleYInitial: 10,
              transitionEasing: 'cubic-bezier(.05,.1,.32,.99)',
            }}
          >
            <div className="member-image m26 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Avinash Dhakne</div>
              <div className="position">NeoTech Lead</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://twitter.com/AvinashDhakne2">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://www.linkedin.com/in/avinash-dhakne-a95909205/">
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
        
</div>

 <div className="row">
        <div className="your-element col-12 col-md-6 text-center py-4">
          <Tilt
            {...{
              tiltAngleYInitial: 10,
              transitionEasing: 'cubic-bezier(.05,.1,.32,.99)',
            }}
          >
            <div className="member-image m27 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Anuja Deshpande</div>
              <div className="position">Co-ordinator</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://twitter.com/ASADeshpande">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://www.linkedin.com/in/anuja-deshpande-610450213/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://github.com/ASA-Deshpande">
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
            <div className="member-image m28 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Adwait Gharpure</div>
              <div className="position">Co-ordinator</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://www.linkedin.com/in/adwait-gharpure/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://github.com/Adw8">
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
