import { Center, Flex, Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { useMethods, useUpdate } from "react-use";
import createMethods, { initState } from "../states/useMethods";

export default function RenderDone({ arr }) {
  const [state, methods] = useMethods(createMethods, initState);
  const update = useUpdate();
  return arr
    ? arr.map((task, i) => {
        return (
          <Center key={i}>
            <Flex
              border="1px solid black"
              borderRadius="10px"
              w="100%"
              alignContent="center"
              bg="gray.300"
              mt={3}
              mb={3}
              justifyContent="space-between"
              p={4}
              _hover={{ cursor: "pointer" }}
            >
              <Text
                fontWeight="400"
                fontSize="150%"
                textDecoration="line-through"
              >
                {task.task}
              </Text>
              <Center fontSize="100%">{`${
                Number(task.time.slice(0, 2)) < 10
                  ? task.time.slice(1, 2)
                  : task.time.slice(0, 2)
              }hrs ${task.time.slice(-2)}mins`}</Center>
            </Flex>
            <Button
              bg="none"
              _hover={{ bg: "none" }}
              _focus={{ outline: "none" }}
              _active={{ bg: "none" }}
              onClick={() => {
                methods.removeFinishedTask(task);
                update();
              }}
            >
              <IoIosCloseCircle color="red" size="50" />
            </Button>
          </Center>
        );
      })
    : null;
}
