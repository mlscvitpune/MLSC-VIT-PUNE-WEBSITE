import React from 'react';
import ParticleBackground from './ParticleBackground';
import { Box, Center, Flex } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Text } from '@chakra-ui/layout';
import styles from '../../pages/Event/Event.module.css';
import { motion } from 'framer-motion';
import { titleAnim, titleAnim2 } from '../../utils/useAnimation';

const Landing = () => {
  return (
    <Box
      position="relative"
      bgColor="#263e6a"
      zIndex="-1"
      h={{ sm: '50vh', md: '100vh' }}
      w="100%"
    >
      <ParticleBackground />

      <Flex
        flexDirection={{ md: 'row', base: 'column' }}
        justifyContent="space-evenly"
        alignItems="center"
        ml={{ base: '0', md: '-4' }}
      >
        <Center p="1">
          <Image
            w={{ base: '200px', md: '500px' }}
            src="/Images/MLSC Logo Changed.png"
            position="relative"
            alt=""
            m={{ base: '2', md: '8' }}
          />
        </Center>
        <Center p="1" color="white">
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <motion.div variants={titleAnim} animate="after" initial="before">
              <Text fontWeight={500} fontSize={{ base: '2.8rem', md: '5rem' }}>
                MLSC VIT Pune
              </Text>
            </motion.div>
            <motion.div variants={titleAnim2} animate="after" initial="before">
              <Text fontSize={{ base: '1.8rem', md: '3rem' }}>
                Learn-Build-Inspire
              </Text>
            </motion.div>
          </Flex>
        </Center>
      </Flex>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Box
        top="94%"
        bottom="0%"
        zIndex="2"
        position="absolute"
        mt={{ base: '1rem', md: '5rem' }}
      >
        <Box h={{ base: '0.2' }} w="100%" position="absolute">
          <div className={styles.wave_3}></div>
          <div className={styles.wave_2}></div>
          <div className={styles.wave_1}></div>
        </Box>
        <Box
          h={{ base: '0.2' }}
          w="100%"
          position="absolute"
          transform="rotateX(180deg)"
        >
          <div className={styles.wave_2}></div>
          <div className={styles.wave_1}></div>
        </Box>
      </Box>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Box>
  );
};
export default Landing;
