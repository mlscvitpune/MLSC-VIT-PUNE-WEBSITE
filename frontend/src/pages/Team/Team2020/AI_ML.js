import React from 'react';
import Tilt from 'react-parallax-tilt';
import Team from './aiml.json'

function AI_ML() {
    return (
        <div>
            <div className="our-team pt-2" id="ai-ml">
                Artificial Intelligence & Machine Learning
            </div>
            <div className='row'>
                {
                    Team.map((member) => {
                        return (
                            member && <div key={member.key} className="your-element col-12 col-md-3 text-center py-4">
                                <Tilt
                                    {...{
                                        tiltAngleYInitial: 10,
                                        transitionEasing: 'cubic-bezier(.05,.1,.32,.99)',
                                    }}
                                >
                                    <div className={member?.image}></div>
                                    <div className="hover_3d pt-3">
                                        <div className="name">{member?.name}</div>
                                        <div className="position">{member?.position}</div>
                                        <div>
                                            <ul className="list-inline">
                                                <li className="list-inline-item social-icons">
                                                    <a href={member?.instagram}>
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item social-icons">
                                                    <a href={member?.linkedin}>
                                                        <i className="fab fa-linkedin"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item social-icons">
                                                    <a href="
                                                    ">
                                                        <i className="fab fa-github"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Tilt>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AI_ML;
