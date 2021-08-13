import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useMethods } from "react-use";
import createMethods, { initState } from "../states/useMethods";
import RenderToDo from "./renderToDo";

export default function TasksContainer() {
  const [state, methods] = useMethods(createMethods, initState);

  return (
    <>
      <Box mt={5}>
        <Flex>
          <Input variant="filled" placeholder="Filled" size="lg" w="50%" />
          <Button size="lg" colorScheme="linkedin" ml={3}>
            Add
          </Button>
        </Flex>
        <Box mt={5} p={1}>
          <Heading border="5px solid red" p={3}>
            To do List
          </Heading>
        </Box>
        yo
        <RenderToDo />
        {console.log(state.todo)}
      </Box>
    </>
  );
}
