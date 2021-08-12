import { Box, Button, Center, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import parseTime from "../helpers/parseTime";

export default function renderTasks({ arr }) {
  const [toDoArray, setToDoArray] = useState(arr);
  console.log(arr);
  return arr.map((task, i) => {
    return (
      <Flex
        mt={1}
        mb={1}
        key={i}
        as="button"
        height="60px"
        width="45%"
        border="1px"
        borderRadius="5px"
        bg="gray.300"
        borderColor="gray.500"
        _hover={{ bg: "gray.400" }}
        justifyContent="space-between"
        onClick={() => {
          arr.splice(i, 1);
          setToDoArray(arr);
          console.log(arr);
        }}
      >
        <Center w="75%" h="100%">
          {task.task}
        </Center>
        <Center
          h="100%"
          w="25%"
          fontSize="90%"
          bg="gray.100"
          borderTopRightRadius="5px"
          borderBottomRightRadius="5px"
        >
          {parseTime(task.timeNeeded)}
        </Center>
      </Flex>
    );
  });
}
