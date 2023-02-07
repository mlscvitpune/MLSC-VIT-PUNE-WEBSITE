import { Box, Flex, Spacer, Image } from '@chakra-ui/react';
import React from 'react';
// import useScroll from '../../utils/useScroll';
// import { motion } from 'framer-motion';
// import { titleAnim } from '../../utils/useAnimation';
// import { chakra } from '@chakra-ui/system';

const Footer = () => {
  // Link for Discord and Medium
  // const [headingElem, controlsHeading] = useScroll();
  // const MotionCenter = chakra(motion.div);
  return (
    <footer>
      <Box
        bg="#121212"
        px={{ base: '4rem', lg: '10rem', xl: '12rem' }}
        py={5}
        position="relative"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          direction={{ base: 'column', md: 'row' }}
        >
          <Box
            p={2}
            color="white"
            fontSize={{ base: '1rem', md: '2rem' }}
            textAlign="center"
          >
            <Image
              src="/Images/MLSC Logo Changed.png"
              alt=""
              height={{ base: '200px' }}
              margin="auto"
            />
            Microsoft Student Learn Club
          </Box>
          <Spacer></Spacer>
          <Flex direction="column" alignItems="center">
            <Box
              p={2}
              color="white"
              fontSize={{ base: '1rem', md: '1.5rem' }}
              textAlign="center"
            >
              Follow Us
            </Box>
            <Box>
              {/* <Box
                style={{
                  height: '30px',
                  width: '30px',
                  background: '#3B5998',
                  fontSize: '20px',
                  textAlign: 'center',
                  color: '#ffffff',
                  display: 'inline-block',
                }}
                m={2}
              >
                <a
                  href="https://www.facebook.com/mlsc.vitpune.7"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </Box> */}
              <Box
                style={{
                  height: '30px',
                  width: '30px',
                  background: '#606060',
                  fontSize: '20px',
                  textAlign: 'center',
                  color: '#ffffff',
                  display: 'inline-block',
                }}
                m={2}
              >
                <a
                  href="https://github.com/MLSC-VitPune"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </Box>
              <Box
                style={{
                  height: '30px',
                  width: '30px',
                  background: '#e1306c',
                  fontSize: '20px',
                  textAlign: 'center',
                  color: '#ffffff',
                  display: 'inline-block',
                }}
                m={2}
              >
                <a
                  href="https://www.instagram.com/mlscvitpune"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </Box>
              <Box
                style={{
                  height: '30px',
                  width: '30px',
                  background: '#0a66c2',
                  fontSize: '20px',
                  textAlign: 'center',
                  color: '#ffffff',
                  display: 'inline-block',
                }}
                m={2}
              >
                <a
                  href="https://in.linkedin.com/company/mlscvitpune"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </Box>
              {/* <Box
                style={{
                  height: '30px',
                  width: '30px',
                  background: '#5865f2',
                  fontSize: '20px',
                  textAlign: 'center',
                  color: '#ffffff',
                  display: 'inline-block',
                }}
                m={2}
              >
                <a href="https://www.google.com/">
                  <i className="fab fa-discord"></i>
                </a>
              </Box>*/}
              <Box
                style={{
                  height: '30px',
                  width: '30px',
                  background: '#000000',
                  fontSize: '20px',
                  textAlign: 'center',
                  color: '#ffffff',
                  display: 'inline-block',
                }}
                m={2}
              >
                <a
                  href="https://www.medium.com/@mlscvitpune"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-medium"></i>
                </a>
              </Box>
            </Box>
            <Box
              p={2}
              color="white"
              fontSize={{ base: '1rem', md: '1.5rem' }}
              textAlign="center"
              mt={4}
            >
              Contact Us
            </Box>
            
            <Box>
            
              <Box
                style={{
                  height: '30px',
                  color: '#ffffff',
                }}
                fontSize={{ base: '1rem', md: '1.5rem' }}
                mx={2}
                mt={2}
              >
                <i className="fas fa-envelope"></i>
                <Box
                  style={{
                    display: 'inline-block',
                    marginLeft: '1rem',
                  }}
                  mx="auto"
                >
                  mlsc@vit.edu
                </Box>
              </Box>
            </Box>
          </Flex>
        </Flex>
        <Box
          p={4}
          color="white"
          fontSize={{ base: '1rem', md: '1.5rem' }}
          textAlign="center"
        >
          {/* Made with{' '}
          <i className="fas fa-heart" style={{ color: '#ff0000' }}></i> by MLSC */}
          
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
