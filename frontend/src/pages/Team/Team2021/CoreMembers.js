import React from 'react';
import Tilt from 'react-parallax-tilt';

function CoreMembers() {
  return (
    <div>
      <div className="our-team pt-2">Core Members</div>
      <div className="row">
        <div className="your-element col-12 col-md-6 text-center py-4">
          <Tilt
            {...{
              tiltAngleYInitial: 10,
              transitionEasing: 'cubic-bezier(.05,.1,.32,.99)',
            }}
          >
            <div className="member-image m1 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Gayatri Munde</div>
              <div className="position">MLSA, President</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://www.instagram.com/g_ttishaa">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://www.linkedin.com/in/gayatri-munde-69397918b/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://github.com/GayatriMunde">
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
            <div className="member-image m2 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Harsh Mehta</div>
              <div className="position">President</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://www.instagram.com/harsh_mehtaaaa">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://www.linkedin.com/in/harsh-mehta-a74283198/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://github.com/1n40">
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
        <div className="your-element col-12 col-md-13 text-center py-4">
          <Tilt
            {...{
              tiltAngleYInitial: 10,
              transitionEasing: 'cubic-bezier(.05,.1,.32,.99)',
            }}
          >
            <div className="member-image m3 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Aditya Deshmukh</div>
              <div className="position">Vice President</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://www.instagram.com/adi.deshmukh_">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://www.linkedin.com/in/aditya-deshmukh-949b44198">
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
      </div>
      <div className="row">
        <div className="your-element col-12 col-md-6 text-center py-4">
          <Tilt
            {...{
              tiltAngleYInitial: 10,
              transitionEasing: 'cubic-bezier(.05,.1,.32,.99)',
            }}
          >
            <div className="member-image m4 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Omkar Prabhune</div>
              <div className="position">Technical Lead</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://www.instagram.com/its_ya_boi_op">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://www.linkedin.com/in/omkarprabhune/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://github.com/OverPoweredDev">
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
            <div className="member-image m5 mx-auto"></div>
            <div className="hover_3d pt-3">
              <div className="name">Manali Teke</div>
              <div className="position">Corporate Lead</div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item social-icons">
                    <a href="https://www.instagram.com/manali_teke">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="www.linkedin.com/in/manali-teke">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item social-icons">
                    <a href="https://github.com/manali-teke">
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

export default CoreMembers;
