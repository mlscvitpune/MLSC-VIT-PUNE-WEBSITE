import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';

import styles from './EventBlogProjectMainSection.module.css';

const ProjectMainSection = ({ title, imageURL, sectionText }) => {
  return (
    <main>
      <Box
        position="relative"
        // h="90vh"
        display="flex"
        flexDir="column"
        overflowX="hidden"
        backgroundColor="#263e6a"
      >
        <Text
          marginTop="10px"
          color="#ffffff"
          textAlign="center"
          fontSize="4rem"
          w="100%"
          zIndex="10"
        >
          {title}
        </Text>
        <Box
          w="100%"
          position="absolute"
          top="0"
          left="0"
          transform="rotateX(180deg)"
        >
          <div className={styles.wave_1}></div>
          <div className={styles.wave_2}></div>
          <div className={styles.wave_3}></div>
        </Box>
        <Box marginY={{ md: '5rem', base: '3rem' }}>
          <Flex
            flexDir={{ lg: 'row', base: 'column' }}
            alignItems="center"
            paddingX={{ md: '2rem', base: '0' }}
            marginX={{ md: '2rem', base: '1rem' }}
            marginBottom={{ lg: '5rem', base: '10rem' }}
          >
            <Box flex="1">
              <Image
                boxSize={{ md: 'lg', base: 'sm' }}
                objectFit="contain"
                src={imageURL}
              ></Image>
            </Box>
            <Box flex="1">
              <Text
                fontSize={{ md: '2xl', base: 'xl' }}
                color="#ffffff"
                textAlign="center"
              >
                {sectionText}
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box w="100%" position="absolute" bottom="0" left="0">
          <div className={styles.wave_1}></div>
          <div className={styles.wave_3}></div>
        </Box>
      </Box>
      <Box
        position="relative"
        h="200px"
        display="flex"
        flexDir="column"
        overflowX="hidden"
        backgroundColor="#ffffff"
      >
        <Box
          w="100%"
          position="absolute"
          top="0"
          left="0"
          transform="rotateX(180deg)"
          zIndex={10}
        >
          <div className={styles.wave_2}></div>
          <div className={styles.wave_1}></div>
        </Box>
      </Box>
    </main>
  );
};

export default ProjectMainSection;
