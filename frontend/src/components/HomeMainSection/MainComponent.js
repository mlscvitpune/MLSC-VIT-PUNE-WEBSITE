import React from 'react';
import CountUp from 'react-countup';
import SimpleImageSlider from 'react-simple-image-slider';
import VisibilitySensor from 'react-visibility-sensor';
import { Link } from 'react-router-dom';

import { Box, Flex, Center, Image } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Text } from '@chakra-ui/layout';

import styles from '../EventBlogProjectMainSection/EventBlogProjectMainSection.module.css';

// import useScroll from '../../utils/useScroll';
// import { motion } from 'framer-motion';
// import { leftAnim, rightAnime, titleAnim } from '../../utils/useAnimation';

import Fade from 'react-reveal/Fade';


const MainComponent = (props) => {
  // const [headingElem, controlsHeading] = useScroll();

  // const [infoElem, controlInfo] = useScroll();
  // const [bubble1, controlBubble1] = useScroll();
  // const [bubble2, controlBubble2] = useScroll();
  // const [bottomInfo, controlbottomInfo] = useScroll();
  // const [imgElem, controlImgElem] = useScroll();

  const images =[
    { url: "Images/TeamPics/teamPic1.jpg"},
    { url: "Images/TeamPics/teamPic2.jpg"},
    { url: "Images/TeamPics/teamPic3.jpg"},
    { url: "Images/TeamPics/teamPic4.jpg"},
    { url: "Images/TeamPics/teamPic5.jpg"},
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
          height={props.section.heading==='About Us'?window.innerWidth*(0.50):0}
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

        
        <Fade>
          <Center
            mb={{ base: '1rem', md: '0rem' }}
            fontSize={{ base: '2rem', md: '4rem' }}
            fontWeight="600"
          >
            {props.section.heading}
          </Center>
        </Fade>
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
            <Fade left>
              <Box p={{ base: '0rem', md: '3rem' }}>{props.section.info}</Box>
            </Fade>
           ) : (
            <>
              {props.section.heading !== 'Events' ? (
                <Fade left>
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    mr={{ base: "8rem", md: "1rem", sm: "1rem"}}
                    ml={{ base: "8rem", md: "1rem", sm: "1rem"}}
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
                </Fade>
              ) : (
                <Fade right>
                
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
                </Fade>
              )}
            </>
          )}
          {/* <motion.div
            
          > */}
          {props.section.heading === 'Events'?(
            <Fade left>
            <Image
            src="/Images/Events_Image_3.jpg"
            width="50rem"
            margin="2rem"
            marginLeft={{base:"0rem", sm:"1rem"}}
            marginRight={{base:"0rem", sm:"1rem"}}
            />
            </Fade>
            
          ):(
          <>
           {props.section.heading === 'About Us'?(
                <Image
                  src=""
                  width="0rem"
                  margin="0rem"
                  marginLeft="0rem"
                />
           )
           :(
              <Fade right>
                <Image
                  src="/Images/Projects_Image_3.jpg"
                  width="50rem"
                  margin="2rem"
                  marginLeft={{base:"0rem", sm:"1rem"}}
                  marginRight={{base:"0rem", sm:"1rem"}}
                />
              </Fade>
           )
           }
          </>
          )
          }
          {/* <motion.img
            ref={imgElem}
            variants={props.section.index % 2 === 0 ? rightAnime : leftAnim}
            initial="before"
            animate={controlImgElem}
            style={{ marginLeft: props.section.heading !== 'About Us'?'8rem':'0rem', margin: props.section.headign?'4rem':'0', width: props.section.heading !== 'About Us'?'40rem':'' }}
            src={props.section.heading === 'Events'? "/Images/Events_Image_3.jpg":props.section.heading === 'Projects'? "/Images/Projects_Image_3.jpg":""}
          /> */}
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
              <Fade bottom>
                <Box
                  m={{ base: '1rem', md: '3rem' }}
                  ml={{ base: '1rem', md: '5rem' }}
                  mr={{ base: '1rem', md: '5rem' }}
                  fontSize={{ base: '1rem', md: '1.6rem' }}
                  textAlign="center"
                >
                  {props.section.bottomInfo}
                </Box>
              </Fade>
              <Button
                fontSize={{ base: '1rem', md: '1.6rem' }}
                variant="solid"
                p={{ base: '1rem', md: '2rem' }}
                mt={{ base: '1rem', md: '2rem' }}
                borderRadius="40px"
                colorScheme="blue"
                shadow= "md"
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
