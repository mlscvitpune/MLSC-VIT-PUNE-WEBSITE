import { Box } from '@chakra-ui/layout';
import React from 'react';
import Particles from 'react-tsparticles';
import config from './particlejs-config';

const ParticleBackground = () => {
  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Box position="absolute">
      <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        params={config}
      />
    </Box>
  );
};
export default ParticleBackground;
