import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";

export default function DoneSection() {
  return (
    <Box w="100%" borderLeft="1px solid gray" h="100vh">
      <Heading textAlign="center">Done (today)</Heading>
    </Box>
  );
}
