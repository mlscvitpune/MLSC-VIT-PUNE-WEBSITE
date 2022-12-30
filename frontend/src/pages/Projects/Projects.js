import React from 'react';
import { Link } from 'react-router-dom';
import EventBlogProjectMainSection from '../../components/EventBlogProjectMainSection/EventBlogProjectMainSection';
import { Box, Flex, Text } from '@chakra-ui/react';
import Projectss from '../projectss/Projectss';

// For Data
import Data from './Data';
// Importing Sections
import ProjectSectionLeft from '../../components/ProjectSections/ProjectSectionLeft';
import ProjectSectionRight from '../../components/ProjectSections/ProjectSectionRight';

const Projects = () => {
  return (
    <>
      <EventBlogProjectMainSection
        title="Project"
        imageURL="/Images/Projects_Image_1.png"
        sectionText="Microsoft Learn Student Club strongly believes in learning through applying hands on knowledge, Thus various problem statements and projects are assigned to team members regularly in order to help them develop their skill and build a practical approach towards theoritical knowledge. We have worked on several problem statements until now covering domains like Web Development, Machine Learning and Artificial Intelligence, IOT, Robotics, Image Processing, etc. "
      ></EventBlogProjectMainSection>
      <Box marginTop="5rem">
        {Data.length !== 0 ? (
          Data.map((data) => {
            return data.index % 2 === 0 ? (
              <ProjectSectionLeft
                key={data.index}
                projectTitle={data.projectTitle}
                projectDesc={data.projectDesc}
              ></ProjectSectionLeft>
            ) : (
              <ProjectSectionRight
                key={data.index}
                projectTitle={data.projectTitle}
                projectDesc={data.projectDesc}
              ></ProjectSectionRight>
            );
          })
        ) : (
          <Box marginBottom="5rem">
            <Flex
              paddingX="3rem"
              marginX="3rem"
              backgroundColor="#263e6a"
              flexDir="column"
              borderRadius="2rem"
              color="#ffffff"
              paddingY="1rem"
            ></Flex>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Projects;
