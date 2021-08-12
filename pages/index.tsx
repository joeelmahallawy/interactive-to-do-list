import { Box, Button, Center, Flex, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
// import ToDoTasks from "../components/toDoTasks";
import RenderTasks from "../components/renderTasks";
import DoneTasks from "../components/doneTasks";
import AddTask from "../helpers/addTask";

const IndexPage = () => {
  const [tasksArray, setTasksArray] = useState([]);
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
        <Button onClick={() => console.log(tasksArray)}>hi</Button>
        <Box h="100vh" w="100%">
          <Heading textAlign="center">Todo</Heading>
          <Flex flexDir="column" alignItems="center" m="0 auto" bg="red">
            <AddTask arr={tasksArray} />
            {/* {setTasksArray(tasksArray)} */}
            <RenderTasks array={tasksArray} />
          </Flex>
        </Box>
        <DoneTasks />
      </Flex>
    </>
  );
};

export default IndexPage;
