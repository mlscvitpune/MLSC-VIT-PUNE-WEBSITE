import React from 'react';
import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react';

const ProjectSectionRight = ({ projectTitle, projectDesc }) => {
  return (
    <Box marginBottom="5rem">
      <Flex
        paddingX="3rem"
        marginX="3rem"
        backgroundColor="#263e6a"
        flexDir="column"
        borderRadius="2rem"
        color="#ffffff"
        paddingY="1rem"
      >
        <Text
          textAlign="center"
          mt="2rem"
          mb={{ md: 0, base: '2rem' }}
          fontSize={{ md: '3rem', base: '1.75rem' }}
        >
          {projectTitle}
        </Text>
        <Flex flexDir={{ md: 'row', base: 'column-reverse' }}>
          <Flex flex="1" flexDir="column" alignItems="center">
            <Center flex="1" textAlign="center" my={{ base: '1rem', md: 0 }}>
              {projectDesc}
            </Center>
            <Box flex="1">
              <Button colorScheme="teal" variant="solid">
                Go to Repo
              </Button>
            </Box>
          </Flex>
          <Image
            flex="1"
            boxSize="xs"
            objectFit="contain"
            src="/Images/Projects_Image_1.png"
            margin="0 auto"
          ></Image>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProjectSectionRight;
