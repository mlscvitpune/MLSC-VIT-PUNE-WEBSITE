import React from 'react';
import { HStack, Tag } from '@chakra-ui/react';
function BlogTags(props) {
  return (
    <HStack
      spacing={2}
      marginTop={props.marginTop}
      marginX={{ base: 'auto', md: 0 }}
    >
      {props.tags.map((tag) => {
        return (
          <Tag
            fontSize={{ base: '0.5rem', md: '0.7rem', lg: '0.9rem' }}
            size={'md'}
            variant="solid"
            colorScheme="orange"
            key={tag}
          >
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
}

export default BlogTags;
