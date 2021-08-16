import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import useCountDown from "react-countdown-hook";
import TimeField from "react-simple-timefield";
import { useMethods, useUpdate } from "react-use";
import getUsersTasks from "../helpers/getUsersTasks";

import createMethods, { initState } from "../states/useMethods";

import RenderToDo from "./RenderToDo";
import RenderUpNext from "./UpNext";

export default function TasksContainer() {
  const [state, methods] = useMethods(createMethods, initState);
  const task = useRef();
  const updateSelf = useUpdate();
  const time = useRef();
  const startTimer = useRef();

  const [showNextUp, setshowNextUp] = useState(false);
  function renderParent() {
    setshowNextUp(true);
  }

  return (
    <>
      <Box borderBottom="1px solid gray" p={2}>
        <Flex mb={2}>
          <Center>
            <Heading fontSize="250%">Next up:</Heading>
            <Heading fontSize="200%" fontWeight="400" fontFamily="sans-serif">
              {state.inProgress.length == 1 ? state.inProgress[0].task : null}
            </Heading>
          </Center>
        </Flex>
        <RenderUpNext arr={state.inProgress} />
      </Box>
      <Box mt={5}>
        <Flex>
          <Input
            variant="filled"
            placeholder="Ex) Do emails for 5 mins"
            size="lg"
            w="40%"
            ref={task}
          />
          <TimeField
            value={"04:00"}
            input={<Input variant="filled" size="lg" w="10%" ref={time} />}
            colon=":"
          />
          <Button
            size="lg"
            colorScheme="linkedin"
            ml={3}
            onClick={() => {
              methods.addToDo(
                // @ts-expect-error
                getUsersTasks(task.current.value, time.current.value)
              );
              updateSelf();
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
