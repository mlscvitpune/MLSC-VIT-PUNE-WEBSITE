import React from 'react';
import '../Team/Team.css';
import Abstract from '../Team/Icons/abstract.svg';
import TeamCard from './TeamCard';
import CoreMembers from './Team2021/CoreMembers';
import AI_ML from './Team2021/AI_ML';
import AppDev from './Team2021/AppDev';
import WebDev from './Team2021/WebDev';
import IOT from './Team2021/IOT';
import NeoTech from './Team2021/NeoTech';
import ContentMultimedia from './Team2021/ContentMultimedia';
import ManagementMarketing from './Team2021/ManagementMarketing';
import Wave from '../Team/Icons/wave.svg';
// import OurTeam from './Elements/OurTeam';

function Team2021() {
  return (
    <div className="background-blue">
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
        <ContentMultimedia />
      </div>
      <div className="svg-image-rotate">
        <img src={Wave} alt="wave" />
      </div>
      {/* ---------------------------------------------------------------------------------- */}
      <ManagementMarketing />
      {/* ---------------------------------------------------------------------------------- */}
    </div>
  );
}

export default Team2021;
