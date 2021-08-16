import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import Countdown from "react-countdown";
import useCountDown from "react-countdown-hook";
import { useClickAway, useMethods, useUpdate } from "react-use";
import getTimeFormat from "../helpers/getTimeFormat";
import getTotalTime from "../helpers/getTotalTime";
import zeroPaddingForTime from "../helpers/zeroPaddingForTime";
import createMethods, { initState } from "../states/useMethods";
import startResumePauseBtn from "./startResumePauseBtn";

export default function RenderUpNext({ arr }) {
  const updateMe = useUpdate();
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
  //   FIXME:FIXME:FIXME: IF SECONDS ==1 ASK IF USER IS DONE

  return arr.map((next, i) => {
    return (
      <Flex alignItems="center" key={i}>
        <Box w="87.5%">
          {/* hi */}
          {/* <Center justifyContent="flex-end" fontSize="x-large">
            Time left:
            {getTimeFormat(
              initialTime,
              timeLeft / 1000 / 3600,
              (timeLeft / 1000 / 60) % 60,
              timeLeft
            )}
          </Center> */}
          {/* FIXME:FIXME:TIMELEFT ABOVE THE DECREASING BLOCKFIXME:FIXME:FIXME: */}
          <Flex
            border="1px solid gray"
            borderRadius="10px"
            h="60px"
            w={`${
              timeLeft / initialTime ? (timeLeft / initialTime) * 100 : 100
            }%`}
            justifyContent="center"
            bg="green.300"
            // onClick={() => {
            //   pause();
            //   methods.removeFromNextUp(next);
            //   updateMe();
            // }}
            p={3}
            _hover={{ cursor: "pointer" }}
          >
            <Heading pos="absolute">
              <Flex>
                Time left:
                {getTimeFormat(
                  initialTime,
                  timeLeft / 1000 / 3600,
                  (timeLeft / 1000 / 60) % 60,
                  timeLeft
                )}
              </Flex>
            </Heading>
          </Flex>
        </Box>
        <Flex ml="auto" flexDir="column" mb={1}>
          {/* FIXME:FIXME:FIXME:ADD TIME FROM ALL ARRAYSFIXME:FIXME:FIXME: */}

          <Heading fontWeight="500" ml="auto" fontSize="110%">
            {getTotalTime(state)}
          </Heading>
          {showButton == "Start"
            ? startResumePauseBtn(
                "Pause",
                setshowButton,
                start,
                "Start",
                "messenger",
                setShowTotalTime,
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
    );
  });
}
