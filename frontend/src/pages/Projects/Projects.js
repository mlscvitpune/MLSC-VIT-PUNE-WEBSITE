import React, { useEffect, useState } from 'react';

import EventBlogProjectMainSection from '../../components/EventBlogProjectMainSection/EventBlogProjectMainSection';
import { Box, Flex, Text } from '@chakra-ui/react';
import Projectss from '../projectss/Projectss';

// For Data
import Data from './Data';
// Importing Sections
import ProjectSectionLeft from '../../components/ProjectSections/ProjectSectionLeft';
import ProjectSectionRight from '../../components/ProjectSections/ProjectSectionRight';

import axiosInstance from '../../utils/axiosInstance';
import Waves from '../../utils/waves/Waves';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      await axiosInstance.get('/api/projects/getProjects').then((res) => {
        if (res.status === 200) setProjects(res.data.data);
      });
    };
    fetchProjects();
    console.log(projects);
  }, []);

  const fetchProject = async (id) => {
    await axiosInstance.get(`/api/projects/getProject/${id}`).then((res) => {
      if (res.status === 200) return res.data.data;
    });
  };

  return (
    <>
      <EventBlogProjectMainSection
        title="PROJECTS"
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
          <Box marginBottom="5rem"></Box>
        )}
      </Box>
      <Waves />
      <Projectss />
    </>
  );
};

export default Projects;
