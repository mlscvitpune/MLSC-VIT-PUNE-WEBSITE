import { Flex } from '@chakra-ui/layout';
import React from 'react';
import Data from './Data';
import MainComponent from './MainComponent';
const HomeMain = () => {
  return (
    <Flex flexDir="column">
      {Data.map((section, index) => (
        <MainComponent section={section} key={index}></MainComponent>
      ))}
    </Flex>
  );
};
export default HomeMain;
