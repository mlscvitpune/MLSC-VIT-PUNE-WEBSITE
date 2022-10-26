import React from 'react';

import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Center,
  Badge,
  VStack,
  StackDivider,
  Stack,
} from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

const EventModelSectionLeft = ({
  eventTitle,
  modalBody,
  eventDesc,
  eventImg,
  footfall,
  peopleOrganising,
  dateTime,
  eventSpan,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Box marginBottom="5rem">
        <Flex
          // paddingX="3rem"
          paddingX={{ base: '2rem', md: '3rem' }}
          marginX={{ base: '1rem', md: '3rem' }}
          backgroundColor="#263e6a"
          flexDir="column"
          borderRadius="2rem"
          color="#ffffff"
          paddingY="1rem"
        >
          <Flex flexDir={{ md: 'row', base: 'column-reverse' }} margin="2rem">
            <Flex flex="2" flexDir="column" alignItems="center">
              <Text
                textAlign="center"
                marginY={{ base: '2rem', md: 0 }}
                marginBottom="1rem"
                fontSize={{ md: '3rem', base: '1.75rem' }}
                fontWeight="900"
              >
                {eventTitle}
              </Text>
              <Center
                flex="1"
                textAlign="center"
                my={{ base: '1rem', md: 0 }}
                fontWeight="300"
                letterSpacing="0.1rem"
              >
                {eventDesc}
              </Center>
              <Box flex="1" mb={{ base: '1rem', md: 0 }} marginTop="1rem">
                <Button colorScheme="teal" variant="solid" onClick={onOpen}>
                  Know More
                </Button>

                <Modal isOpen={isOpen} onClose={onClose} size="3xl">
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader textAlign="center">{eventTitle}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <VStack
                        divider={<StackDivider borderColor="gray.200" />}
                        spacing={1}
                        align="stretch"
                      >
                        <Box>
                          <Box
                            boxSize={{ base: '300px', md: 'sm' }}
                            margin="0 auto"
                          >
                            <Image
                              src={eventImg}
                              boxSize="100%"
                              objectFit="contain"
                              alt="Dan Abramov"
                            />
                          </Box>
                          <Stack
                            direction={{ base: 'column', md: 'row' }}
                            marginY="1rem"
                          >
                            <Stack
                              direction="row"
                              justifyContent="space-between"
                              w={{ base: '100%', md: '50%' }}
                            >
                              <Stack
                                direction="column"
                                textAlign="center"
                                flex="1"
                              >
                                <Badge>
                                  <Text>Footfall</Text>
                                  <Text>{footfall}</Text>
                                </Badge>
                              </Stack>
                              <Stack
                                direction="column"
                                textAlign="center"
                                flex="1"
                              >
                                <Badge colorScheme="green">
                                  <Text>Organising People</Text>
                                  <Text>{peopleOrganising}</Text>
                                </Badge>
                              </Stack>
                            </Stack>
                            <Stack
                              direction="row"
                              justifyContent="space-between"
                              w={{ base: '100%', md: '50%' }}
                            >
                              <Stack
                                flex="1"
                                direction="column"
                                textAlign="center"
                              >
                                <Badge colorScheme="red">
                                  <Text>Date and Time</Text>
                                  <Text>{dateTime}</Text>
                                </Badge>
                              </Stack>
                              <Stack
                                flex="1"
                                direction="column"
                                textAlign="center"
                              >
                                <Badge colorScheme="purple">
                                  <Text>Event Span</Text>
                                  <Text>{eventSpan} hrs</Text>
                                </Badge>
                              </Stack>
                            </Stack>
                          </Stack>
                        </Box>

                        <Box fontSize={{ base: '0.75rem', md: '1rem' }}>
                          {modalBody}
                        </Box>
                      </VStack>
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Box>
            </Flex>
            <Image
              flex="1"
              boxSize="xs"
              objectFit="contain"
              src={eventImg}
              margin="0 auto"
            ></Image>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
};

export default EventModelSectionLeft;
