import React from 'react';
import { background, Box, Button, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';
import "./p.css";
const Pright = (props) => {
    const { img, projectTitle, projectDesc, repoLink } = props;
    return (
        <>
            <Box display='flex' justifyContent='center' alignItems={['center', 'center', 'unset']} m={['4rem', '4rem', '2rem']} bg='#263e6a' p='3rem' rounded='2rem' flexDirection={['column', 'column', 'row']} w={['22em', '30em', '48em', '60em']} >
                <Box className='pImgBox' position='relative' right={['0rem', '0rem', '7rem', '7rem']} bottom={['7rem', '7rem', '0rem']} width={['18em', '25em', '40em', '30em']} rounded='2rem' boxShadow=" 0px 0px 20px black">
                    <Image src={img} width='100%' height='100%' objectFit='cover' minHeight='300px'>

                    </Image>
                </Box>


                <Box display='flex' flexDirection='column' w={['22em', '30em', '48em', '50em']} justifyContent='center' alignItems={['center', 'center', 'unset']}>
                    <Box p='1rem' color='white'>
                        <Heading textAlign={['center', 'center', 'unset']}>{projectTitle}</Heading>
                    </Box>
                    <Box p='1rem' textAlign={['center', 'center', 'unset']}>
                        <Text color='white'>
                            {projectDesc}

                        </Text>

                    </Box>
                    <Box p='1rem'>
                        <a href={repoLink} target='_blank'><Button bg='#319795' color='white' _hover={{ bg: '#206866' }}>Check it out</Button></a>

                    </Box>
                </Box>

            </Box>

        </>

    );
}
export default Pright;