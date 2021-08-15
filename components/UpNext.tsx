import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Countdown from "react-countdown";
import useCountDown from "react-countdown-hook";
import { useMethods } from "react-use";
import getTimeFormat from "../helpers/getTimeFormat";

import createMethods, { initState } from "../states/useMethods";
// import CountDownTimer from "./CountDownTimer";

export default function RenderUpNext({ arr, btnRef }) {
  //   console.log(arr[0]);
  const [state, methods] = useMethods(createMethods, initState);
  const minutesToSeconds = arr[0]?.time.slice(-2) * 60;
  const hoursToSeconds = arr[0]?.time.slice(0, 2) * 60 * 60;
  const [timeLeft, { start, pause, resume, reset }] = useCountDown(
    hoursToSeconds + minutesToSeconds,
    1000
  );

  console.log(btnRef.current.onclick);
  btnRef.current.onclick = start();
  console.log(minutesToSeconds);
  console.log(hoursToSeconds);
  return arr.map((next, i) => {
    return (
      <Flex w="95%" key={i}>
        <Flex
          border="1px solid black"
          borderRadius="10px"
          h="60px"
          //   w={`${
          //     ((hoursToSeconds + minutesToSeconds) /
          //       (MAX_TIME.hours * 60 * 60 + MAX_TIME.minutes * 60)) *
          //     100
          //   }%`}
          w="85%"
          maxW="87.5%"
          justifyContent="center"
          bg="green.300"
          p={3}
          _hover={{ cursor: "pointer" }}
        >
          <Heading pos="absolute">
            Time left:{" "}
            {getTimeFormat(hoursToSeconds, minutesToSeconds, timeLeft)}
          </Heading>
        </Flex>
        <Center>
          {/* <Text ml="auto">{console.log(state.inProgress)}</Text> */}
          {/* {getTotalTime(state.todo, state.inProgress)} */}
          {/* FIXME:FIXME:FIXME:ADD TOTAL TIME FROM ALL ARRAYSFIXME:FIXME:FIXME: */}

          <Text ml="auto" fontSize="110%">
            Total:{state.inProgress[0].time.slice(0, 2)} hrs{" "}
            {state.inProgress[0].time.slice(-2)} mins
          </Text>
        </Center>
      </Flex>
    );
  });
}
