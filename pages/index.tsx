import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";
import TaskContainer from "../components/TasksContainer";

const IndexPage = () => {
  return (
    <>
      <Box m="0 auto" w="80vw" p={5}>
        <Center mb={3}>
          <Heading>WANT2WORK?</Heading>
        </Center>
        <TaskContainer />
      </Box>
    </>
  );
};

export default IndexPage;
