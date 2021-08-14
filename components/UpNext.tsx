import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Countdown from "react-countdown";
import { useMethods } from "react-use";

import createMethods, { initState } from "../states/useMethods";
// FIXME:FXIME:FIXME:

export default function RenderUpNext({ arr }) {
  const [state, methods] = useMethods(createMethods, initState);

  return arr.map((next, i) => {
    const minutesToSeconds = next.time.slice(-2) * 60;
    const hoursToSeconds = next.time.slice(0, 2) * 60 * 60;
    const MAX_TIME = {
      hours: 2,
      minutes: 0,
    };
    const acc = 0;

    return (
      <Flex w="95%" key={i}>
        <Flex
          border="1px solid black"
          borderRadius="10px"
          h="60px"
          w={`${
            ((hoursToSeconds + minutesToSeconds) /
              (MAX_TIME.hours * 60 * 60 + MAX_TIME.minutes * 60)) *
            100
          }%`}
          maxW="87.5%"
          justifyContent="center"
          bg="green.300"
          p={3}
          _hover={{ cursor: "pointer" }}
        >
          <Heading>
            <Countdown
              autoStart={false}
              zeroPadTime={2}
              //   zeroPadDays={0}

              //   daysInHours={false}
              date={Date.now() + (minutesToSeconds + hoursToSeconds) * 1000}
            />
          </Heading>
          {/* </Center> */}
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
