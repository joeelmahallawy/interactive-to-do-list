import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { useMethods } from "react-use";
import createMethods, { initState } from "../states/useMethods";

export default function RenderUpNext({ arr }) {
  const [state, methods] = useMethods(createMethods, initState);
  return arr.map((next, i) => {
    return (
      <Flex
        key={i}
        border="1px solid black"
        borderRadius="10px"
        w="50%"
        alignContent="center"
        ml={5}
        justifyContent="space-between"
        p={5}
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
