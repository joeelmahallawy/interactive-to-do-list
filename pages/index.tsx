import { Box } from "@chakra-ui/react";
import React from "react";
import TaskContainer from "../components/TasksContainer";

const IndexPage = () => {
  return (
    <>
      <Box m="0 auto" w="90vw" p={5}>
        <TaskContainer />
      </Box>
    </>
  );
};

export default IndexPage;
