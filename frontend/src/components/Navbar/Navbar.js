import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  Stack,
  IconButton,
  useDisclosure,
  HStack,
  Collapse,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Team',
    path: '/team',
  },
  {
    name: 'Event',
    path: '/event',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
];

const NavLink = ({ children, path, onClose }) => {
  return (
    <Link onClick={onClose} to={path}>
      <Box
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          borderBottom: '1px solid #fff',
          borderRadius: 0,
          transform: 'auto',
          scale: 1.1,
          // fontSize: '1.2rem',
        }}
      >
        {children}
      </Box>
    </Link>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header>
      <nav>
        <Box position="relative" zIndex="2" bg="#121212" px={4} py={1}>
          <Flex alignItems="center">
            <Box p={2} color="white" fontSize={{ base: '1rem', md: '1.4rem' }} fontStyle = {" "}>
              <Flex alignItems="center">
                <Image
                  src="/Images/MLSC Logo Changed.png"
                  alt=""
                  height={{ base: '35px', sm: '50px' }}
                />
                Microsoft Student Learn Club
              </Flex>
            </Box>
            <Spacer></Spacer>
            <IconButton
              // m={4}
              size={'md'}
              icon={
                isOpen ? (
                  <CloseIcon></CloseIcon>
                ) : (
                  <HamburgerIcon></HamburgerIcon>
                )
              }
              _focus={{
                border: 'none',
              }}
              border="none"
              bg="#121212"
              color="white"
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            ></IconButton>
            <HStack
              p={4}
              color="white"
              display={{ base: 'none', md: 'flex' }}
              fontSize={'1rem'}
            >
              {Links.map(({ name, path }) => {
                return (
                  <NavLink onClose={onClose} key={path} path={path}>
                    {name}
                  </NavLink>
                );
              })}
            </HStack>
          </Flex>
          <Collapse in={isOpen} animateOpacity>
            {isOpen ? (
              <Box pb={4} display={{ md: 'none' }}>
                <Stack
                  direction={'column'}
                  as={'nav'}
                  // spacing={4}
                  color="white"
                >
                  {Links.map(({ name, path }) => {
                    return (
                      <NavLink key={path} path={path} onClose={onClose}>
                        {name}
                      </NavLink>
                    );
                  })}
                </Stack>
              </Box>
            ) : null}
          </Collapse>
        </Box>
      </nav>
    </header>
  );
};

export default Navbar;
