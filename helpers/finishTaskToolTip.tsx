import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { useMethods } from "react-use";
import createMethods, { initState } from "../states/useMethods";

export default function finishTaskToolTip(rest, methods, setShowBtn, fn) {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Button
          size="md"
          bg="transparent"
          _hover={{ bg: "none" }}
          _active={{ bg: "none" }}
          _focus={{ outline: "none" }}
          onClick={() => {
            methods();
            rest();
            setShowBtn("Start");
            fn();
          }}
        >
          <IoCheckmarkCircleSharp size="30px" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />

        <PopoverBody>
          {" "}
          <Heading fontSize="md" textAlign="center" fontWeight="500">
            Mark task as done
          </Heading>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
