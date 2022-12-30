import React from 'react';
import CountUp from 'react-countup';
import SimpleImageSlider from 'react-simple-image-slider';
import VisibilitySensor from 'react-visibility-sensor';
import { Link } from 'react-router-dom';

import { Box, Flex, Center } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Text } from '@chakra-ui/layout';

import styles from '../EventBlogProjectMainSection/EventBlogProjectMainSection.module.css';

import useScroll from '../../utils/useScroll';
import { motion } from 'framer-motion';
import { leftAnim, rightAnime, titleAnim } from '../../utils/useAnimation';


const MainComponent = (props) => {
  const [headingElem, controlsHeading] = useScroll();

  const [infoElem, controlInfo] = useScroll();
  const [bubble1, controlBubble1] = useScroll();
  const [bubble2, controlBubble2] = useScroll();
  const [bottomInfo, controlbottomInfo] = useScroll();
  const [imgElem, controlImgElem] = useScroll();

  const images =[
    { url: "Images/TeamPics/teamPic1.jpg"},
    { url: "Images/TeamPics/teamPic1.jpg"}
  ];
  
  return (
    <Box>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Flex
        justifyContent="center"
        alignItems="center"
        mt="4"
        position="relative"
        bg="white"
        flexDir="column"
        ml={{ base: '2.2rem', md: '4rem' }}
        mr={{ base: '2.2rem', md: '4rem' }}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          position="relative"
          flexDir="column"
          p={{ base: '0rem', md: '2rem' }}
        >
        <SimpleImageSlider
          bgColor='#bdd9fa'
          width={props.section.heading==='About Us'?window.innerWidth*(0.85):0}
          height={props.section.heading==='About Us'?window.innerWidth*(0.40):0}
          images={images}
          showBullets={false}
          showNavs={true}
          autoPlay={true}
          navMargin={10}
          navSize={20}
          autoPlayDelay={4.0}
          slideDuration={2.0}
          navStyle={2}
          loop={true}
        />
        </Flex>

        
        <motion.div
          ref={headingElem}
          initial="before"
          variants={titleAnim}
          animate={controlsHeading}
        >
          <Center
            mb={{ base: '2rem', md: '0' }}
            fontSize={{ base: '2rem', md: '4rem' }}
            fontWeight="600"
          >
            {props.section.heading}
          </Center>
        </motion.div>
        <Flex
          flexDir={
            props.section.index % 2 === 1
              ? { base: 'column', md: 'row-reverse' }
              : { base: 'column', md: 'row' }
          }
          justifyContent="space-between"
          alignItems="center"
          fontSize={{ base: '1rem', md: '1.6rem' }}
          textAlign="center"
        >
          {props.section.heading === 'About Us' ? (
            <motion.div
              ref={infoElem}
              animate={controlInfo}
              variants={leftAnim}
              initial="before"
            >
              <Box p={{ base: '0rem', md: '4rem' }}>{props.section.info}</Box>
            </motion.div>
           ) : (
            <>
              {props.section.heading !== 'Events' ? (
                <motion.div
                  ref={bubble1}
                  initial="before"
                  variants={leftAnim}
                  animate={controlBubble1}
                >
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Flex
                      // mr={{ base: '2rem', md: '4rem' }}
                      p={{ base: '2rem', md: '4rem' }}
                      fontSize="2rem"
                      borderRadius="40%"
                      bg="#bdd9fa"
                      w={{ base: '8rem', md: '10rem' }}
                      h={{ base: '8rem', md: '10rem' }}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div>
                            {isVisible ? (
                              <CountUp
                                start={0}
                                end={props.section.info}
                                duration={3}
                                suffix="+"
                              />
                            ) : (
                              <div>+0</div>
                            )}
                          </div>
                        )}
                      </VisibilitySensor>
                    </Flex>
                    <Text fontWeight="800" mt="1rem">
                      Ongoing Projects
                    </Text>
                  </Flex>
                </motion.div>
              ) : (
                <motion.div
                  ref={bubble2}
                  initial="before"
                  animate={controlBubble2}
                  variants={rightAnime}
                >
                  <Flex justifyContent="center" alignItems="center">
                    <Flex
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      m="2rem"
                      ml="0"
                    >
                      <Flex
                        // mr={{ base: '2rem', md: '4rem' }}
                        p={{ base: '2rem', md: '4rem' }}
                        fontSize="2rem"
                        borderRadius="40%"
                        bg="#bdd9fa"
                        w={{ base: '8rem', md: '10rem' }}
                        h={{ base: '8rem', md: '10rem' }}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <VisibilitySensor>
                          {({ isVisible }) => (
                            <div>
                              {isVisible ? (
                                <CountUp
                                  start={0}
                                  end={props.section.totalEvents}
                                  duration={5}
                                  suffix="+"
                                />
                              ) : (
                                <div>+0</div>
                              )}
                            </div>
                          )}
                        </VisibilitySensor>
                      </Flex>
                      <Text fontWeight="800" mt="1rem">
                        Events
                      </Text>
                    </Flex>
                    <Flex
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Flex
                        // mr={{ base: '2rem', md: '4rem' }}
                        p={{ base: '2rem', md: '4rem' }}
                        fontSize="2rem"
                        borderRadius="40%"
                        bg="#bdd9fa"
                        w={{ base: '8rem', md: '10rem' }}
                        h={{ base: '8rem', md: '10rem' }}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <VisibilitySensor minTopValue="-10px">
                          {({ isVisible }) => (
                            <div>
                              {isVisible ? (
                                <CountUp
                                  start={0}
                                  end={props.section.totalParticipants}
                                  duration={5}
                                  suffix="+"
                                />
                              ) : (
                                <div>+0</div>
                              )}
                            </div>
                          )}
                        </VisibilitySensor>
                      </Flex>
                      <Text fontWeight="800" mt="1rem">
                        Participants
                      </Text>
                    </Flex>
                  </Flex>
                </motion.div>
              )}
            </>
          )}
          {/* <motion.div
            
          > */}
          <motion.img
            ref={imgElem}
            variants={props.section.index % 2 === 0 ? rightAnime : leftAnim}
            initial="before"
            animate={controlImgElem}
            style={{ marginLeft: '8rem', margin: '4rem', width: '26rem' }}
            src="/Images/AboutUs.png"
          />
          {/* </motion.div> */}
        </Flex>
        {props.section.heading === 'About Us' ? (
          <Center
            textAlign="center"
            fontWeight="800"
            fontSize={{ base: '1.4rem', md: '2rem' }}
          >
            {/* A Quote we can add to describe our team? */}
          </Center>
        ) : (
          <Box>
            <Flex justifyContent="center" alignItems="center" flexDir="column">
              <motion.div
                ref={bottomInfo}
                variants={titleAnim}
                initial="before"
                animate={controlbottomInfo}
              >
                <Box
                  m={{ base: '1rem', md: '3rem' }}
                  ml={{ base: '1rem', md: '5rem' }}
                  mr={{ base: '1rem', md: '5rem' }}
                  fontSize={{ base: '1rem', md: '1.6rem' }}
                  textAlign="center"
                >
                  {props.section.bottomInfo}
                </Box>
              </motion.div>
              <Button
                fontSize={{ base: '1rem', md: '1.6rem' }}
                variant="outline"
                p={{ base: '1rem', md: '2rem' }}
                mt={{ base: '1rem', md: '2rem' }}
                colorScheme="blue"
              >
                <Link to={props.section.link}>{props.section.buttonTitle}</Link>
              </Button>
            </Flex>
          </Box>
        )}
      </Flex>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {props.section.index !== 2 && (
        <Box zIndex="2" position="relative" mt={{ base: '1rem', md: '2rem' }}>
          <Box
            h={{ base: '0.2' }}
            w="100%"
            position="absolute"
            top="0"
            left="0"
          >
            <div className={styles.wave_3}></div>
            <div className={styles.wave_1}></div>
          </Box>
          <Box
            h={{ base: '0.2' }}
            w="100%"
            position="absolute"
            transform="rotateX(180deg)"
            bottom="0"
            left="0"
          >
            <div className={styles.wave_2}></div>
            <div className={styles.wave_1}></div>
          </Box>
        </Box>
      )}
    </Box>
  );
};
export default MainComponent;
