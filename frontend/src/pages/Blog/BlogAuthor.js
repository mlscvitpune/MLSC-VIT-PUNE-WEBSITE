import React from 'react';
import { HStack, Text, Link } from '@chakra-ui/react';
function BlogAuthor(props) {
  return (
    <div>
      <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
        {/* <Image
      borderRadius="full"
      boxSize="40px"
      src={props.authorImage}
      alt={props.name}
    /> */}
        <Link href={props.authorLink} isExternal>
          <Text fontWeight="medium">{props.name}</Text>
        </Link>
        <Text>:</Text>
        <Text>{props.authorDomain}</Text>
      </HStack>
      <Text>{props.date}</Text>
    </div>
  );
}

export default BlogAuthor;
