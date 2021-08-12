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
import RenderTasks from "../components/renderTasks";
import DoneTasks from "../components/doneTasks";
// import AddTask from "../helpers/addTask";
import { IoAddCircle } from "react-icons/io5";
// import TimeField from "react-simple-timefield";
// import TimePicker from "react-time-picker";
import TimePicker from "rc-time-picker";
// import ReactDOM from "react-dom";
import "rc-time-picker/assets/index.css";
import TimeField from "react-simple-timefield";

const IndexPage = () => {
  const [tasksArray, setTasksArray] = useState([]);

  function AddTask({ arr }) {
    const task = useRef();
    const timeNeeded = useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [value, onChange] = useState("10:00");

    return (
      <>
        <Button
          height="60px"
          width="45%"
          border="1px"
          bg="gray.300"
          mt={1}
          borderColor="gray.500"
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
              <FormControl mb={2}>
                <FormLabel>Task</FormLabel>
                <Input size="lg" type="text" ref={task} />
              </FormControl>
              <FormControl>
                <FormLabel>Time needed</FormLabel>
                {/* <Input /> */}
                <Box>
                  <TimeField
                    // value={timeNeeded.current?.value}
                    value={
                      // @ts-expect-error
                      timeNeeded.current?.value
                        ? // @ts-expect-error
                          timeNeeded.current?.value
                        : "01:30"
                    }
                    input={<Input size="lg" w="50%" ref={timeNeeded} />}
                    colon=":"
                  />
                </Box>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                onClick={() => {
                  const copy = [...arr];
                  // console.log("original", arr);
                  copy.push({
                    // @ts-expect-error
                    task: task.current.value,
                    // @ts-expect-error
                    timeNeeded: timeNeeded.current.value,
                  });
                  onClose();
                  setTasksArray([...copy]);
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
  // FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:

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
          <Flex flexDir="column" alignItems="center" m="0 auto">
            <RenderTasks arr={tasksArray} />
            <AddTask arr={tasksArray} />
          </Flex>
        </Box>
        <DoneTasks />
      </Flex>
    </>
  );
};

export default IndexPage;
