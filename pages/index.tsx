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
import InProgress from "../components/inProgressTasks";

const IndexPage = () => {
  return (
    <>
      <Box borderBottom="1px solid gray" p={5}>
        <Box>
          <Heading textAlign="center">WANT2WORK?</Heading>
        </Box>
        <Box>
          <Flex>
            <Heading fontSize="100%">In Progress:</Heading>
            {/* <InProgress inProgressArr={inProgressArray} /> */}
          </Flex>
        </Box>
      </Box>

      <Flex w="100vw" justifyContent="space-between" m="0 auto">
        <RenderTasks />
      </Flex>
    </>
  );
};

export default IndexPage;
