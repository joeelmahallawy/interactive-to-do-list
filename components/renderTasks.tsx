import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";

export default function renderTasks({ array }) {
  return array.map((task, i) => {
    // console.log(task);
    return (
      <Box key={i} bg="blue">
        {task.task}
      </Box>
    );
  });
}
