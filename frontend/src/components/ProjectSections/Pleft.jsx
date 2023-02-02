import React from 'react';
import "./p.css";
import { background, Box, Button, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';

const Pleft = (props) => {
    const { img, projectTitle, projectDesc, repoLink } = props;
    return (
        <>
            <Box display='flex' justifyContent='center' alignItems={['center', 'center', 'unset']} m={['4rem', '4rem', '2rem']} bg='#263e6a' p='3rem' rounded='2rem' flexDirection={['column', 'column', 'row']} w={['22em', '30em', '48em', '60em']}>
                <Box display='flex' flexDirection='column' w={['18em', '30em', '48em', '50em']} justifyContent='center' alignItems={['center', 'center', 'unset']}
                    order={['2', '2', '1']}>
                    <Box p='1rem'>
                        <Heading color='white' textAlign={['center', 'center', 'unset']}>{projectTitle}</Heading>
                    </Box>
                    <Box p='1rem' textAlign={['center', 'center', 'unset']}>
                        <Text color='white'>
                            {projectDesc}

                        </Text>

                    </Box>
                    <Box p='1rem'>
                        <a href={repoLink} target='_blank'><Button bg='#319795' color='white' _hover={{ bg: '#206866' }}>Check it Out</Button></a>

                    </Box>
                </Box>
                <Box order={['1', '1', '2']} className='pImgBox' width={['18em', '25em', '40em', '30em']} position='relative' left={['0rem', '0rem', '7rem', '7rem']} bottom={['7rem', '7rem', '0rem']} minHeight='300px' rounded='2rem' boxShadow=" 0px 0px 20px black">
                    <Image src={img} width='100%' height='100%' objectFit='cover' minHeight='300px'>

                    </Image>
                </Box>


            </Box>

        </>


    );
}
export default Pleft;