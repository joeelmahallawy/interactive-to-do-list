import { Box, Heading } from "@chakra-ui/react";
import React, { useState } from "react";

export default function InProgress({ inProgressArr }) {
  const [progressArr, setProgressArr] = useState([]);
  console.log(inProgressArr);
  return inProgressArr.map((task, i) => (
    <Box key={i}>
      <Heading>{task.task}</Heading>
    </Box>
  ));
}
