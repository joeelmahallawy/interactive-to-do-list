import { Box, Button, Center, Flex, Heading, Input } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import TimeField from "react-simple-timefield";
import { useMethods, useUpdate } from "react-use";
import getUsersTasks from "../helpers/getUsersTasks";
import createMethods, { initState } from "../states/useMethods";
import HelpModal from "./HelpModal";
import RenderDone from "./RenderDone";
import RenderToDo from "./renderToDo";
import RenderUpNext from "./UpNext";

export default function TasksContainer() {
  const [state, methods] = useMethods(createMethods, initState);
  const task = useRef();
  const updateSelf = useUpdate();
  const time = useRef();
  const [showInProgress, setShowInProgress] = useState(false);
  // const [updateMoi, setUpdateMoi] = useState(false)
  return (
    <>
      <Box borderBottom="1px solid gray" p={2}>
        <Flex mb={2}>
          <Center>
            {showInProgress ? (
              <Heading color="teal.700" fontSize="200%">
                In Progress:
              </Heading>
            ) : (
              <Heading color="teal.700" fontSize="200%">
                Next up:
              </Heading>
            )}
            <Heading
              mt="auto"
              fontSize="200%"
              fontWeight="300"
              fontFamily="sans-serif"
            >
              {state.inProgress[0] ? state.inProgress[0].task : ""}
            </Heading>
          </Center>
        </Flex>

        <RenderUpNext
          arr={state.inProgress}
          func={setShowInProgress}
          update={updateSelf}
        />
      </Box>

      <Box mt={5}>
        <Flex>
          <Input
            variant="outline"
            placeholder="Eg. Do my coding project"
            size="lg"
            w="40%"
            ref={task}
            _focus={{ boxShadow: "md" }}
            mr={1}
          />
          <TimeField
            value={"00:45"}
            input={
              <Input
                variant="outline"
                _focus={{ boxShadow: "md" }}
                size="lg"
                w="10%"
                ref={time}
              />
            }
            colon=":"
          />
          <Button
            size="lg"
            colorScheme="linkedin"
            ml={3}
            onClick={() => {
              // @ts-expect-error
              if (task.current.value != "" && time.current.value != "00:00") {
                methods.addToDo(
                  // @ts-expect-error
                  getUsersTasks(task.current.value, time.current.value)
                );
                updateSelf();
                // @ts-expect-error
                task.current.value = "";
              }
            }}
          >
            Add
          </Button>
          <HelpModal />
        </Flex>
        <Box mt={5}>
          <Flex
            justifyContent="space-between"
            border="0.5px solid lightgray"
            p={3}
          >
            <Heading>To do List</Heading>
            <Button
              colorScheme="red"
              onClick={() => {
                methods.clearToDo();
                updateSelf();
              }}
            >
              Clear
            </Button>
          </Flex>
          <RenderToDo arr={state.todo} updateParent={updateSelf} />
          <RenderDone arr={state.done} />
        </Box>
      </Box>
    </>
  );
}
