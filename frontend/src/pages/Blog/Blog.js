import React, { useEffect, useState } from 'react';
import {
  Text,
  Box,
  Image,
  Button,
  Heading,
  Link,
  Divider,
  Container,
  Spinner,
  Center,
} from '@chakra-ui/react';
// import blogs from './data';
import EventBlogProjectMainSection from '../../components/EventBlogProjectMainSection/EventBlogProjectMainSection';
import BlogTags from './BlogTags';
import BlogAuthor from './BlogAuthor';

const Blog = () => {
  const API_LINK =
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40mlscvitpune';

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await (await fetch(API_LINK)).json((res) => res.data);
      console.log(data.items);

      data.items.map((blog) => {
        //* Regex used to get the Name and Medium Account of the Author from blog.content
        const author = blog.content.match(
          /href="https:\/\/medium.com\/(.*)<\/em>/
        );
        // console.log(author[0]);
        const authorLink = author[0].match(/href="(.*)"/);
        // console.log(authorLink[1]);
        const authorName = author[0].match(/<em>(.*)<\/em>/);
        // console.log(authorName[1]);
        blog['authorName'] = authorName[1];
        blog['authorLink'] = authorLink[1];
        return 1;
      });

      setBlogs(data.items);
    };

    fetchBlogs();
  }, []);

  return (
    <main>
      <EventBlogProjectMainSection
        title="Our Blogs"
        imageURL="/Images/Blog_Image_1.png"
        sectionText="We here at MLSC believe in giving back to the society in the form of spreading technical information and awareness, in order to fulfill the same cause, MLSC releases blogs and technical content which helps the team members to grow as developers and also contribute towards the technical community.
        We have released several blogs on various topics like Blockchain, Cryptocurrency, Big data, Cybersecurity, etc. 
        "
      ></EventBlogProjectMainSection>

      <Container maxW={'7xl'} p={{ base: '1rem', md: '3rem' }}>
        {blogs.length === 0 ? (
          <Box
            borderTop="1px solid #000"
            borderBottom="1px solid #000"
            w="100%"
          >
            <Center m="2rem">
              <Spinner size="xl"></Spinner>
            </Center>
          </Box>
        ) : (
          blogs.map((blog) => {
            return (
              <React.Fragment key={blog.pubDate}>
                <Box
                  marginTop={{ base: '1', sm: '5' }}
                  display="flex"
                  flexDirection={{ base: 'column', md: 'row' }}
                  justifyContent="space-between"
                >
                  <Box
                    display="flex"
                    flex="1"
                    // marginRight="3"
                    position="relative"
                    alignItems="center"
                  >
                    <Box
                      width={{ base: '100%', sm: '85%' }}
                      zIndex="2"
                      // marginLeft={{ base: '0', sm: '5%' }}
                      marginTop="5%"
                      marginX={{ base: 'auto', md: 0 }}
                      alignItems="center"
                    >
                      <Link
                        textDecoration="none"
                        _hover={{ textDecoration: 'none' }}
                        alignItems="center"
                      >
                        <Image
                          borderRadius="lg"
                          src={blog.thumbnail}
                          alt="Thumbnail of blog"
                          objectFit="contain"
                          width={'80%'}
                          marginX={{ base: 'auto', md: 0 }}
                        />
                      </Link>
                    </Box>
                    <Box
                      zIndex="1"
                      width="100%"
                      position="absolute"
                      height="100%"
                    >
                      <Box
                        backgroundSize="20px 20px"
                        opacity="0.4"
                        height="100%"
                      />
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="center"
                    marginTop={{ base: '3', md: '0' }}
                    // marginX={{ base: 'auto', md: 0 }}
                    textAlign={{ base: 'center', md: 'start' }}
                  >
                    <BlogTags tags={blog.categories} />
                    <Heading marginTop="1">
                      <Link
                        textDecoration="none"
                        _hover={{ textDecoration: 'none' }}
                      >
                        {blog.title.replace(/&amp;/g, '&')}
                      </Link>
                    </Heading>
                    <Text as="p" marginTop="2" fontSize="lg">
                      {/* {blog.description} */}
                    </Text>
                    <BlogAuthor
                      name={blog.authorName}
                      date={blog.pubDate}
                      authorLink={blog.authorLink}
                      // authorImage={blog.authorImage}
                    />
                    <Button
                      mt={'3%'}
                      onClick={() => {
                        window.open(`${blog.link}`, '_blank');
                      }}
                      colorScheme={'teal'}
                      width={'60%'}
                      marginX={{ base: 'auto', md: 0 }}
                    >
                      Read More
                    </Button>
                  </Box>
                </Box>
                <Divider marginTop="5" />
              </React.Fragment>
            );
          })
        )}
      </Container>
    </main>
  );
};

export default Blog;
