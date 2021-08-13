import { Heading } from "@chakra-ui/react";
import React from "react";
import createMethods, { initState } from "../states/useMethods";
import { useMethods } from "react-use";
const [state, methods] = useMethods(createMethods, initState);

export default function RenderToDo() {
  return <Heading>say word</Heading>;
}
