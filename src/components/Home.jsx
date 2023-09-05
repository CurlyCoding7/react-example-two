import React from 'react';
import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py={2}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={4}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={[40, 400]} filter={'hue-rotate(-130deg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={[4, 16]}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            molestias perspiciatis corporis dolorum temporibus ad vitae.
            Nesciunt nobis obcaecati totam voluptatem, corrupti ad libero
            minima, voluptatibus non perferendis culpa officia. Sapiente saepe
            voluptatum nihil omnis maiores aliquam! Iste reprehenderit amet
            laboriosam culpa aperiam repellat? Iste aspernatur aliquam et illum
            dolore repudiandae velit saepe quidem, placeat, non, inventore
            cupiditate. Officia, voluptatum. Magnam quibusdam, exercitationem
            similique culpa illum quam impedit temporibus nihil asperiores quae
            et distinctio consequuntur hic ullam laudantium alias, sunt quis
            molestiae provident. Suscipit, officiis! Iste nemo delectus
            accusamus architecto? Quisquam, blanditiis! Totam excepturi tenetur
            libero nemo nulla, quas labore temporibus dolorem, ipsa molestias
            itaque nostrum ab quam eum in dicta magni nisi molestiae quod
            laudantium quae debitis inventore ullam! Nobis odit sapiente
            architecto maxime deleniti blanditiis officiis delectus.
            Consequuntur dicta adipisci rem et, id aspernatur incidunt explicabo
            exercitationem ipsam! Fugiat voluptatibus tenetur reprehenderit unde
            commodi, tempora vel ex asperiores?
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch Your Future
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'blackAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'blackAlpha.600'} color={'black'} {...headingOptions}>
        Night Life is Cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
