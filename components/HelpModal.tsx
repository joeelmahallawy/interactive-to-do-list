import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Center,
  ListItem,
  OrderedList,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { IoHelpCircle } from "react-icons/io5";
export default function HelpModal() {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Center>
          <Button
            fontSize="175%"
            bg="transparent"
            _hover={{ bg: "none" }}
            _focus={{ outline: "none" }}
            _active={{ bg: "noen" }}
          >
            <IoHelpCircle />
          </Button>
        </Center>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />

        <PopoverHeader>
          <Heading fontSize="150%">How to use:</Heading>
        </PopoverHeader>
        <PopoverBody>
          <OrderedList p={1}>
            <ListItem>Add a task</ListItem>
            <ListItem>Click on task to add it up next</ListItem>
            <ListItem>Start tasks!</ListItem>
            {/* <ListItem>Facilisis in pretium nisl aliquet</ListItem> */}
          </OrderedList>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
