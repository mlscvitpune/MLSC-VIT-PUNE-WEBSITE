import React from 'react';
import '../Team/Team22.css';
import Abstract from '../Team/Icons/abstract.svg';
import TeamCard from './TeamCard22';
import CoreMembers from './Team2022/CoreMembers';
import AI_ML from './Team2022/AI_ML';
import AppDev from './Team2022/AppDev';
import WebDev from './Team2022/WebDev';
import IOT from './Team2022/IOT';
import NeoTech from './Team2022/NeoTech';
import ContentMultimedia from './Team2022/ContentMultimedia';
import Blockchain from './Team2022/Blockchain';
import ManagementMarketing from './Team2022/ManagementMarketing';
import Wave from '../Team/Icons/wave.svg';
import Dropdown from 'react-bootstrap/Dropdown';
// import OurTeam from './Elements/OurTeam';

function Team2022() {
  return (
        <div className="background-blue">
         <Dropdown>
      <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
        Year
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="./Team21">2021-22</Dropdown.Item>
        <Dropdown.Item href="./Team22">2022-23</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

      {/* <OurTeam /> */}
      {/* <div className="container"> */}
      <div className="our-team pt-4">Our Awesome Team</div>
      <div className="b-border"></div>
      {/* ---------------------------------------------------------------------------------- */}
      <CoreMembers />
      {/* </div> */}
      <div className="svg-image">
        <img src={Wave} alt="wave" />
      </div>
      <div className="background-wave">
        {/* ---------------------------------------------------------------------------------- */}

        <div className="svg-image">
          <img src={Abstract} alt="abstract design" />
        </div>

        {/* ---------------------------------------------------------------------------------- */}

        <div className="our-team pt-2" id="teams">
          THE TEAMS
        </div>
        <div className="team-card">
          {/* <TeamCard /> */}
          <TeamCard />
        </div>
      </div>
      <div className="svg-image-rotate">
        <img src={Wave} alt="wave" />
      </div>
      <div className="svg-image">
        <img src={Abstract} alt="abstract design" />
      </div>
      {/* ---------------------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------------------------- */}
      <AI_ML />
      {/* ---------------------------------------------------------------------------------- */}
      <div className="svg-image">
        <img src={Wave} alt="wave" />
      </div>
        <div className="background-wave">
          <AppDev />
        </div>
      <div className="svg-image-rotate">
        <img src={Wave} alt="wave" />
      </div>
      {/* ---------------------------------------------------------------------------------- */}
      <WebDev />
      {/* ---------------------------------------------------------------------------------- */}
      <div className="svg-image">
        <img src={Wave} alt="wave" />
      </div>
      <div className="background-wave">
        <IOT />
      </div>
      <div className="svg-image-rotate">
        <img src={Wave} alt="wave" />
      </div>
      {/* ---------------------------------------------------------------------------------- */}
      <NeoTech />
      {/* ---------------------------------------------------------------------------------- */}
      <div className="svg-image">
        <img src={Wave} alt="wave" />
      </div>

      <div className="background-wave">
        <Blockchain/>
      </div>

      <div className="svg-image-rotate">
        <img src={Wave} alt="wave" />
      </div>
      {/* ---------------------------------------------------------------------------------- */}
      <ContentMultimedia />
      {/* ---------------------------------------------------------------------------------- */}


      {/* ---------------------------------------------------------------------------------- */}
      <div className="svg-image">
        <img src={Wave} alt="wave" />
      </div>

  <div className="background-wave">
        <ManagementMarketing/>
      </div>
      

    </div>
  );
}

export default Team2022;




   