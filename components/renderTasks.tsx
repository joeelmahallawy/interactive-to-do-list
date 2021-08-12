import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";

export default function renderTasks({ array }) {
  return array.map((task, i) => {
    console.log(task);
    <Button>PRINT</Button>;
    return (
      <Box key={i} bg="blue">
        {task.task}
      </Box>
    );
  });
}
