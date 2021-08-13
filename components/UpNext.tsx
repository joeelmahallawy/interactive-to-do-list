import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useMethods } from "react-use";
import createMethods, { initState } from "../states/useMethods";

export default function RenderUpNext({ arr }) {
  const [state, methods] = useMethods(createMethods, initState);
  return arr.map((next, i) => {
    <Box>
      <Heading>
        YOO
        {i}
      </Heading>
    </Box>;
  });
}
