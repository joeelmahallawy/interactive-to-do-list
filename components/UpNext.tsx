import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import Countdown from "react-countdown";
import useCountDown from "react-countdown-hook";
import { useClickAway, useMethods, useUpdate } from "react-use";
import getTimeFormat from "../helpers/getTimeFormat";
import getTotalTime from "../helpers/getTotalTime";
import createMethods, { initState } from "../states/useMethods";
import FinishedTaskConfirmation from "./FinishedTaskConfirmation";
import startResumePauseBtn from "./startResumePauseBtn";

export default function RenderUpNext({ arr, func, update }) {
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
  if (seconds == 55) {
    pause();
    return null;
    // return <Button onClick={() => pause()}>PASUE</Button>;
  }

  return arr.map((next, i) => {
    return (
      <Flex alignItems="center" key={i}>
        <Box w="86%">
          <Heading
            fontSize="200%"
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
            </Flex>
          </Heading>

          <Flex
            border="1px solid gray"
            borderRadius="10px"
            h="60px"
            w={`${
              timeLeft / initialTime ? (timeLeft / initialTime) * 100 : 100
            }%`}
            transition="width 0.25s"
            bg="green.300"
            onClick={() => {
              reset();
              methods.removeFromNextUp(next);
              setshowButton("Start");
              func(false);
              update();
              console.log(update);
            }}
            p={3}
            _hover={{ cursor: "pointer" }}
          />
        </Box>
        <Flex ml="auto" flexDir="column" mt={3}>
          <Heading fontWeight="500" ml="auto" fontSize="100%">
            {getTotalTime(state, timeLeft)}
          </Heading>
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
    );
  });
}
