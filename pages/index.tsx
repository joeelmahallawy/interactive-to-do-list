import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { useMethods } from "react-use";
import createMethods, { initState } from "../states/useMethods";
import TaskContainer from "../components/TasksContainer";

const IndexPage = () => {
  const [state, methods] = useMethods(createMethods, initState);
  return (
    <>
      <Box borderBottom="1px solid gray" p={5} bg="green">
        <Flex>
          <Heading fontSize="200%">Next up:</Heading>
          {/* <InProgress inProgressArr={inProgressArray} /> */}
        </Flex>
      </Box>
      <Box m="0 auto" w="90vw" p={5}>
        <TaskContainer />
      </Box>
    </>
  );
};

export default IndexPage;
