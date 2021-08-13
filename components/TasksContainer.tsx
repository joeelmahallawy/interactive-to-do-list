import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useMethods, useUpdate } from "react-use";
import createMethods, { initState } from "../states/useMethods";
import RenderToDo from "./RenderToDo";
import RenderUpNext from "./UpNext";

export default function TasksContainer() {
  const [state, methods] = useMethods(createMethods, initState);
  const task = useRef();
  const updateSelf = useUpdate();

  return (
    <>
      <Box borderBottom="1px solid gray" p={5} bg="green">
        <Flex>
          <Heading fontSize="200%">Next up:</Heading>
          <RenderUpNext arr={state.inProgress} />
        </Flex>
      </Box>
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
          {/* <Button onClick={() => {}}>hi</Button> */}
        </Flex>
        <Box mt={5}>
          <Heading p={3} border="0.5px solid lightgray">
            To do List
          </Heading>
          <RenderToDo arr={state.todo} />
        </Box>
      </Box>
    </>
  );
}
