import { Box, Button, Container, Flex, Heading, HStack, Image, Select, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";

const CartPaymentPage = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Flex direction={{ base: "column", md: "row" }} gap={10}>
        {/* Product Image Gallery */}
        <VStack align="start" spacing={4}>
          <Image src="/images/product-main.jpg" alt="Product Image" boxSize="400px" objectFit="cover" />
          <HStack spacing={2}>
            <Image src="/images/product-thumb1.jpg" alt="Product Thumbnail 1" boxSize="100px" objectFit="cover" />
            <Image src="/images/product-thumb2.jpg" alt="Product Thumbnail 2" boxSize="100px" objectFit="cover" />
            <Image src="/images/product-thumb3.jpg" alt="Product Thumbnail 3" boxSize="100px" objectFit="cover" />
            <Image src="/images/product-thumb4.jpg" alt="Product Thumbnail 4" boxSize="100px" objectFit="cover" />
          </HStack>
        </VStack>

        {/* Product Details */}
        <VStack align="start" spacing={4} flex="1">
          <Heading as="h1" size="lg">Men's Real Shearling Sheepskin Leather Warm Duffle Trench Coat</Heading>
          <Text fontSize="2xl" fontWeight="bold">$144.99</Text>
          <Text>Size</Text>
          <HStack spacing={2}>
            <Button variant="outline">32</Button>
            <Button variant="outline">33</Button>
            <Button variant="outline">34</Button>
            <Button variant="outline">36</Button>
            <Button variant="outline">38</Button>
          </HStack>
          <Text color="green.500">In stock</Text>
          <Button colorScheme="blackAlpha" size="lg">Add to Bag</Button>

          {/* Product Details and Description */}
          <Box>
            <Heading as="h3" size="md" mt={6}>Product Details</Heading>
            <Text mt={2}><strong>About this item:</strong></Text>
            <ul>
              <li>Leather</li>
              <li>Buckle closure</li>
              <li>Hand Wash Only</li>
            </ul>
            <Text mt={4}><strong>Product Description:</strong></Text>
            <Text>WHAT WE ARE UP TO AT BRANDS LOCK: Our philosophy is to provide...</Text>
            <Button variant="link" colorScheme="blue" mt={2}>Show More</Button>
          </Box>

          {/* Social Media Sharing Options */}
          <HStack spacing={4} mt={6}>
            <Text>Share this product with your friends:</Text>
            <Button as="a" href="#" leftIcon={<FaFacebook />} colorScheme="facebook">Share</Button>
            <Button as="a" href="#" leftIcon={<FaTwitter />} colorScheme="twitter">Tweet</Button>
            <Button as="a" href="#" leftIcon={<FaPinterest />} colorScheme="red">Pin it</Button>
          </HStack>
        </VStack>
      </Flex>
    </Container>
  );
};

export default CartPaymentPage;