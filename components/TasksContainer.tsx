import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useMethods, useUpdate } from "react-use";
import createMethods, { initState } from "../states/useMethods";
import RenderToDo from "./RenderToDo";

export default function TasksContainer() {
  const [state, methods] = useMethods(createMethods, initState);
  const task = useRef();
  const updateSelf = useUpdate();

  return (
    <>
      <Box mt={5}>
        <Flex>
          <Input
            variant="filled"
            placeholder="Filled"
            size="lg"
            w="50%"
            ref={task}
          />
          <Button
            size="lg"
            colorScheme="linkedin"
            ml={3}
            onClick={() => {
              // @ts-expect-error
              methods.addToDo(task.current.value);
              updateSelf();
            }}
          >
            Add
          </Button>
        </Flex>
        <Box mt={5} border="0.5px solid lightgray">
          <Heading p={3} borderBottom="0.5px solid lightgray">
            To do List
          </Heading>
          <RenderToDo />
        </Box>
      </Box>
    </>
  );
}
