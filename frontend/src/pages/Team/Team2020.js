import React from 'react';
import '../Team/Team22.css';
import Abstract from '../Team/Icons/abstract.svg';
import TeamCard from './TeamCard22';
import Wave from '../Team/Icons/wave.svg';
import Dropdown from 'react-bootstrap/Dropdown';
import CoreMembers from './Team2021/CoreMembers';

function Team2020() {
    return (
        <div className="background-blue">
           <Dropdown className='drop-down'>
        <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
          Year
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          {/* <Dropdown.Item href="./Team20">2020-21</Dropdown.Item> */}
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
        {/* <AI_ML /> */}
        {/* ---------------------------------------------------------------------------------- */}
        <div className="svg-image">
          <img src={Wave} alt="wave" />
        </div>
          <div className="background-wave">
            {/* <AppDev /> */}
          </div>
        <div className="svg-image-rotate">
          <img src={Wave} alt="wave" />
        </div>
        {/* ---------------------------------------------------------------------------------- */}
        {/* <WebDev /> */}
        {/* ---------------------------------------------------------------------------------- */}
        <div className="svg-image">
          <img src={Wave} alt="wave" />
        </div>
        <div className="background-wave">
          {/* <IOT /> */}
        </div>
        <div className="svg-image-rotate">
          <img src={Wave} alt="wave" />
        </div>
        {/* ---------------------------------------------------------------------------------- */}
        {/* <NeoTech /> */}
        {/* ---------------------------------------------------------------------------------- */}
        <div className="svg-image">
          <img src={Wave} alt="wave" />
        </div>
  
        <div className="background-wave">
          {/* <Blockchain/> */}
        </div>
  
        <div className="svg-image-rotate">
          <img src={Wave} alt="wave" />
        </div>
        {/* ---------------------------------------------------------------------------------- */}
        {/* <ContentMultimedia /> */}
        {/* ---------------------------------------------------------------------------------- */}
  
  
        {/* ---------------------------------------------------------------------------------- */}
        <div className="svg-image">
          <img src={Wave} alt="wave" />
        </div>
  
    <div className="background-wave">
          {/* <ManagementMarketing/> */}
        </div>
        
  
      </div>
    );
  }
  
  export default Team2020;
  