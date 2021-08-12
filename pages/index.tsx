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
// import ToDoTasks from "../components/toDoTasks";
import RenderTasks from "../components/renderTasks";
import DoneTasks from "../components/doneTasks";
import AddTask from "../helpers/addTask";
import { IoAddCircle } from "react-icons/io5";

const IndexPage = () => {
  const [tasksArray, setTasksArray] = useState([]);
  const [LOGCONSOLE, setLOGCONSOLE] = useState(false);

  // FIXME:
  function AddTask({ arr }) {
    const task = useRef();
    const timeNeeded = useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();
    // console.log("hi");
    return (
      <>
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
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Task</FormLabel>
                <Input type="email" ref={task} />
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
                  tasksArray.push({
                    // @ts-expect-error
                    task: task.current.value,
                    // @ts-expect-error
                    timeNeeded: timeNeeded.current.value,
                  });
                  onClose();
                  setTasksArray(tasksArray);
                  // console.log(arr);
                  console.log("TASKS ARRAY", tasksArray);
                }}
              >
                Add!
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  // ADDTASKS HERE
  // FIXME:

  return (
    <>
      <Box borderBottom="1px solid gray" p={5}>
        <Box>
          <Heading textAlign="center">WANT2WORK?</Heading>
        </Box>
        <Box>
          <Flex>
            <Heading fontSize="100%">In Progress:</Heading>
          </Flex>
        </Box>
      </Box>
      <Flex w="100vw" justifyContent="space-between" m="0 auto">
        <Box h="100vh" w="100%">
          <Heading textAlign="center">Todo</Heading>
          <Flex flexDir="column" alignItems="center" m="0 auto" bg="red">
            {/* FIXME: */}
            {LOGCONSOLE && <AddTask arr={tasksArray} />}
            {/* FIXME: */}
            <Button onClick={() => setLOGCONSOLE(true)}>hi</Button>
            {/* <RenderTasks array={tasksArray} /> */}
          </Flex>
        </Box>
        <DoneTasks />
      </Flex>
    </>
  );
};

export default IndexPage;
