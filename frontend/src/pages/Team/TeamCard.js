import React from 'react';
import './TeamCard.css';
import { Link } from 'react-scroll';
import AIML from '../Team/Team_Card_Elements/ai3.png';
import App from '../Team/Team_Card_Elements/app2.png';
import Web from '../Team/Team_Card_Elements/web4.png';
import IOT from '../Team/Team_Card_Elements/iot3.png';
import NeoTech from '../Team/Team_Card_Elements/neotech1.png';
import Multi from '../Team/Team_Card_Elements/multi6.png';
import Content from '../Team/Team_Card_Elements/content5.png';
import Management from '../Team/Team_Card_Elements/mgmt4.png';

function TeamCard() {
  return (
    <div>
      <div className="cards-list">
        <Link className="card 1" to="ai-ml" smooth={true} duration={100}>
          <div className="card_image">
            <div className="card_image">
              <img src={AIML} alt="AI & ML" />
              <div className="image_overlay image_overlay--primary">
                <div className="image_title">AI & ML</div>
              </div>
            </div>
          </div>
        </Link>

        <Link className="card 2" to="app-dev" smooth={true} duration={100}>
          <div className="card_image">
            <div className="card_image">
              <img src={App} alt="AppDev" />
              <div className="image_overlay image_overlay--primary">
                <div className="image_title">AppDev</div>
              </div>
            </div>
          </div>
        </Link>

        <Link className="card 3" to="web-dev" smooth={true} duration={200}>
          <div className="card_image">
            <div className="card_image">
              <img src={Web} alt="WebDev" />
              <div className="image_overlay image_overlay--primary">
                <div className="image_title">WebDev</div>
              </div>
            </div>
          </div>
        </Link>
        <Link className="card 5" to="iot" smooth={true} duration={200}>
          <div className="card_image">
            <div className="card_image">
              <img src={IOT} alt="IoT" />
              <div className="image_overlay image_overlay--primary">
                <div className="image_title">IoT</div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="cards-list">
        <Link className="card 6" to="neo-tech" smooth={true} duration={300}>
          <div className="card_image">
            <div className="card_image">
              <img src={NeoTech} alt="NeoTech" />
              <div className="image_overlay image_overlay--primary">
                <div className="image_title">NeoTech</div>
              </div>
            </div>
          </div>
        </Link>

        <Link
          className="card 8"
          to="contentmultimedia"
          smooth={true}
          duration={300}
        >
          <div className="card_image">
            <div className="card_image">
              <img src={Content} alt="Content" />
              <div className="image_overlay image_overlay--primary">
                <div className="image_title">Content</div>
              </div>
            </div>
          </div>
        </Link>
        <Link
          className="card 7"
          to="contentmultimedia"
          smooth={true}
          duration={300}
        >
          <div className="card_image">
            <div className="card_image">
              <img src={Multi} alt="Multimedia" />
              <div className="image_overlay image_overlay--primary">
                <div className="image_title">Multimedia</div>
              </div>
            </div>
          </div>
        </Link>

        <Link
          className="card 10"
          to="mangementmarketing"
          smooth={true}
          duration={300}
        >
          <div className="card_image">
            <div className="card_image">
              <img src={Management} alt="Management" />
              <div className="image_overlay image_overlay--primary">
                <div className="image_title">Management</div>
              </div>
            </div>
          </div>
        </Link>
        {/* <Link
          className="card 9"
          to="mangementmarketing"
          smooth={true}
          duration={300}
        >
          <div className="card_image">
            <div className="card_image">
              <img src={Marketing} alt="Marketing" />
              <div className="image_overlay image_overlay--primary">
                <div className="image_title">Marketing</div>
              </div>
            </div>
          </div>
        </Link> */}
      </div>
    </div>
  );
}

export default TeamCard;
