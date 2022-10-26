import { Center, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <Flex height="100vh" justifyContent="center">
      <Center flexDirection="column">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 0.5,
            ease: 'easeInOut',
            repeatDelay: 0.5,
          }}
        >
          <Image
            src="/Images/MLSC Logo Loading.png"
            alt=""
            height={{ base: '150px', sm: '200px' }}
          />
          <Text textAlign="center">MLSC VIT Pune</Text>
        </motion.div>
        {/* <Text>Loading</Text> */}
      </Center>
    </Flex>
  );
};

export default Loading;
