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
import { IoReloadCircleOutline } from "react-icons/io5";

export default function resetTimerToolTip(setShowBtn, reset) {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Button
          bg="transparent"
          _hover={{ bg: "none" }}
          _active={{ bg: "none" }}
          mr={-5}
          _focus={{ outline: "none" }}
          onClick={() => {
            reset();
            setShowBtn("Start");
          }}
        >
          <IoReloadCircleOutline size="30px" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />

        <PopoverBody>
          {" "}
          <Heading fontSize="md" textAlign="center" fontWeight="500">
            Reset current time
          </Heading>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
