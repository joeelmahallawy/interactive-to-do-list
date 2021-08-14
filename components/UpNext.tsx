import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function RenderUpNext({ arr }) {
  return arr.map((next, i) => {
    return (
      <Flex
        key={i}
        border="1px solid black"
        borderRadius="10px"
        w="50%"
        bg="green.300"
        alignContent="center"
        ml={5}
        justifyContent="space-between"
        p={3}
        _hover={{ cursor: "pointer" }}
      >
        <Text fontWeight="400" fontSize="lg">
          {next}
        </Text>
        <Box>TIME HERE</Box>
      </Flex>
    );
  });
}
