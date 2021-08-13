import { Box, Heading, Text, Flex, Button, Center } from "@chakra-ui/react";

import createMethods, { initState } from "../states/useMethods";
import { useMethods, useUpdate } from "react-use";
import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

export default function RenderToDo({ arr }) {
  const [state, methods] = useMethods(createMethods, initState);
  const update = useUpdate();
  //   console.log();

  return arr
    ? arr.map((task, i) => {
        return (
          <Center key={i}>
            <Flex
              border="1px solid black"
              borderRadius="10px"
              w="100%"
              alignContent="center"
              mt={3}
              mb={3}
              justifyContent="space-between"
              p={3}
              _hover={{ cursor: "pointer" }}
              onClick={() => {
                methods.addNext(task);
                update();
                console.log(state);
              }}
            >
              <Text fontWeight="400" fontSize="lg">
                {task}
              </Text>
              <Box>TIME HERE</Box>
            </Flex>
            <Button
              bg="none"
              _hover={{ bg: "none" }}
              _focus={{ outline: "none" }}
              _active={{ bg: "none" }}
              onClick={() => {
                methods.removeTask(task);
                update();
              }}
            >
              <IoIosCloseCircle color="red" size="50" />
            </Button>
          </Center>
        );
      })
    : null;

  //   return <Heading>YOOO</Heading>;
}
