import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import Countdown from "react-countdown";
import useCountDown from "react-countdown-hook";
import { useClickAway, useMethods, useUpdate } from "react-use";
import colorTransitioner from "../helpers/colorTransitioner";
import getTimeFormat from "../helpers/getTimeFormat";
import getTotalTime from "../helpers/getTotalTime";
import createMethods, { initState } from "../states/useMethods";
import startResumePauseBtn from "./startResumePauseBtn";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

export default function RenderUpNext({ arr, func, update }) {
  const [showButton, setshowButton] = useState("Start");
  const [state, methods] = useMethods(createMethods, initState);
  const [showTotalTime, setShowTotalTime] = useState(true);
  const minutesToSeconds = arr[0]?.time.slice(-2) * 60;
  const hoursToSeconds = arr[0]?.time.slice(0, 2) * 60 * 60;
  const initialTime = (hoursToSeconds + minutesToSeconds) * 1000;
  const [timeLeft, { start, pause, resume, reset }] = useCountDown(
    initialTime,
    1000
  );
  const seconds = timeLeft / 1000;
  console.log(seconds);

  if (seconds == 1) {
    reset();
    setshowButton("Start");
    const moveToNextTask = window.confirm("Move on to next task?");
    if (moveToNextTask == true) {
      methods.doNextTask();
      update();
      setshowButton("Start");
    }
  }

  return arr.map((next, i) => {
    return (
      <Flex alignItems="center" key={i}>
        <Box w="80%">
          <Heading
            fontSize="175%"
            fontWeight="400"
            justifyContent="right"
            mb={1}
          >
            <Flex>
              Time left:
              {getTimeFormat(
                initialTime,
                timeLeft / 1000 / 3600,
                (timeLeft / 1000 / 60) % 60,
                timeLeft
              )}
              {console.log(state)}
            </Flex>
          </Heading>

          <Flex
            border="1px solid gray"
            borderRadius="10px"
            h="40px"
            w={`${
              timeLeft / initialTime ? (timeLeft / initialTime) * 100 : 100
            }%`}
            transition="width 0.25s, background-color 6s"
            bg={colorTransitioner(timeLeft, initialTime)}
            onClick={() => {
              reset();
              methods.removeFromNextUp(next);
              setshowButton("Start");
              func(false);
              update();
            }}
            p={3}
            _hover={{ cursor: "pointer" }}
          />
        </Box>
        <Flex ml="auto" flexDir="column" mt={3}>
          <Heading fontWeight="500" ml="auto" fontSize="100%">
            {getTotalTime(state, timeLeft)}
          </Heading>
          <Flex>
            {showButton == "Start"
              ? startResumePauseBtn(
                  "Pause",
                  setshowButton,
                  start,
                  "Start",
                  "messenger",
                  setShowTotalTime,
                  func,
                  initialTime
                )
              : showButton == "Pause"
              ? startResumePauseBtn(
                  "Resume",
                  setshowButton,
                  pause,
                  "Pause",
                  "red"
                )
              : startResumePauseBtn(
                  "Pause",
                  setshowButton,
                  resume,
                  "Resume",
                  "teal"
                )}
          </Flex>
        </Flex>
        <Center mt="auto">
          <Popover trigger="hover">
            <PopoverTrigger>
              <Button
                size="md"
                bg="none"
                _hover={{ bg: "none" }}
                _active={{ bg: "none" }}
                _focus={{ outline: "none" }}
                onClick={() => {
                  methods.finishTask();
                  reset();
                  setshowButton("Start");
                  update();
                }}
              >
                <IoCheckmarkCircleSharp size="35px" />
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
        </Center>
      </Flex>
    );
  });
}
