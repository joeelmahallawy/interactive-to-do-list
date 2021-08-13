import { Box, Heading, Text, Flex } from "@chakra-ui/react";

import createMethods, { initState } from "../states/useMethods";
import { useMethods } from "react-use";
import React from "react";

export default function RenderToDo(arr) {
  const [state, methods] = useMethods(createMethods, initState);
  //   console.log(state.todo);

  return state.todo.map((task, i) => {
    return (
      <Flex
        borderBottom="0.5px solid lightgray"
        key={i}
        alignContent="center"
        mt={3}
        justifyContent="space-between"
        p={3}
      >
        <Text>{task}</Text>
        <Box>TIME HERE</Box>
      </Flex>
    );
  });
  //   return <Heading>YOOO</Heading>;
}
