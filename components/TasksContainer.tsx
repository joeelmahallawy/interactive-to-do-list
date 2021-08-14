import { Box, Button, Center, Flex, Heading, Input } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useMethods, useUpdate } from "react-use";
import getUsersTasks from "../helpers/getUsersTasks";
import parseTime from "../helpers/parseTime";
import createMethods, { initState } from "../states/useMethods";
import RenderToDo from "./RenderToDo";
import RenderUpNext from "./UpNext";

export default function TasksContainer() {
  const [state, methods] = useMethods(createMethods, initState);
  const task = useRef();
  const updateSelf = useUpdate();

  const [showNextUp, setshowNextUp] = useState(false);
  function renderParent() {
    setshowNextUp(true);
  }

  return (
    <>
      <Box borderBottom="1px solid gray" p={2}>
        <Flex alignItems="center">
          <Heading fontSize="175%">Next up:</Heading>
          {/* FIXME: */}
          <RenderUpNext arr={state.inProgress} />
          <Button ml="auto" colorScheme="linkedin">
            Start
          </Button>
        </Flex>
      </Box>
      <Box mt={5}>
        <Flex>
          <Input
            variant="filled"
            placeholder="Ex) Do emails for 5 mins"
            size="lg"
            w="50%"
            // w={getWidthOfTime}
            // FIXME:FIXME:FIXME:
            ref={task}
          />
          <Button
            size="lg"
            colorScheme="linkedin"
            ml={3}
            onClick={() => {
              // @ts-expect-error
              task.current?.value != ""
                ? methods.addToDo(getUsersTasks(task.current))
                : null;
              // getUsersTasks(task.current);
            }}
          >
            Add
          </Button>
        </Flex>
        <Box mt={5}>
          <Heading p={4} border="0.5px solid lightgray">
            To do List
          </Heading>
          <RenderToDo arr={state.todo} reRenderParent={renderParent} />
        </Box>
      </Box>
    </>
  );
}
