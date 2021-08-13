import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import parseTime from "../helpers/parseTime";
import RenderToDo from "./renderToDo";
import RenderDone from "./renderDone";
import AddTask from "../helpers/addTask";
import { IoAddCircle } from "react-icons/io5";

export default function renderTasks() {
  const [toDoArray, setToDoArray] = useState([]);
  const [doneArray, setDoneArray] = useState([]);
  const [inProgressArr, setInProgressArr] = useState([]);
  const task = useRef();
  const timeNeeded = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // function InProgress({ inProgressArr }) {
  //   return inProgressArr.map((task, i) => (
  //     <Box key={i}>
  //       <Heading>{task.task}</Heading>
  //     </Box>
  //   ));
  // }
  return (
    <>
      <Flex h="100vh" w="100%">
        <Flex
          flexDir="column"
          alignItems="center"
          m="0 auto"
          w="100%"
          id="todoSection"
        >
          <Center w="100%">
            <Heading textAlign="center" mt={5}>
              Todo
            </Heading>
          </Center>
          <RenderToDo arr={toDoArray} />
          {/* <AddTask arr={toDoArray} /> */}
          {/* FIXME:FIXME: */}

          <Button
            height="60px"
            width="45%"
            border="2px"
            bg="gray.300"
            borderColor="green.500"
            fontSize="300%"
            _hover={{ bg: "gray.400" }}
            onClick={onOpen}
          >
            <IoAddCircle color="darkgray" />
          </Button>
          <Modal
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            motionPreset="slideInBottom"
          >
            <ModalOverlay />
            <ModalContent h="400px">
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton _focus={{ outline: "none" }} />
              <ModalBody>
                <FormControl>
                  <FormLabel>Task</FormLabel>
                  <Input type="text" ref={task} />
                </FormControl>
                <FormControl>
                  <FormLabel>Time needed</FormLabel>
                  <Input type="number" ref={timeNeeded} />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    const copy = [...toDoArray];
                    copy.push({
                      // @ts-expect-error
                      task: task.current.value,
                      // @ts-expect-error
                      timeNeeded: timeNeeded.current.value,
                    });
                    setToDoArray(copy);
                    onClose();
                  }}
                >
                  Add!
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          {/* FIXME:FIXME: */}
        </Flex>
        <Flex
          flexDir="column"
          alignItems="center"
          w="100%"
          m="0 auto"
          bg="blue"
          id="doneSection"
        >
          <Heading textAlign="center">Todo</Heading>
          <RenderDone arr={doneArray} />
        </Flex>
      </Flex>
    </>
  );
}

// <Button
//           onClick={() => {
//             console.log("PROGERSS ARR", inProgressArray);
//             console.log(`TASK ARR`, tasksArray);
//             setInProgressArray(inProgressArray);
//           }}
//         >
//           hi
//         </Button>
//         <Box h="100vh" w="100%">
//           <Heading textAlign="center">Todo</Heading>
//           <Flex flexDir="column" alignItems="center" m="0 auto">
//             <RenderTasks tasksArr={tasksArray} progressArr={inProgressArray} />
//             {/* FIXME:FIXME:FIXME: */}
//             <AddTask arr={tasksArray} />
//           </Flex>
//         </Box>
//         <DoneTasks />
