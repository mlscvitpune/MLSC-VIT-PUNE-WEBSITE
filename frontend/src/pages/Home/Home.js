import React from 'react';
import Landing from '../../components/Hero/Landing';
import HomeMain from '../../components/HomeMainSection/HomeMainSection';
import { Box } from '@chakra-ui/layout';
const Home = () => {
  return (
    <Box overflowX="hidden" fontFamily="Poppins">
      <Landing />
      <HomeMain />
    </Box>
  );
};

export default Home;
