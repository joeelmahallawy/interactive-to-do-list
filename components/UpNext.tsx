import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import Countdown from "react-countdown";
import useCountDown from "react-countdown-hook";
import { useClickAway, useMethods, useUpdate } from "react-use";
import getTimeFormat from "../helpers/getTimeFormat";

import createMethods, { initState } from "../states/useMethods";

export default function RenderUpNext({ arr }) {
  const [showStartButton, setShowStartButton] = useState(true);
  const updateMe = useUpdate();
  const [state, methods] = useMethods(createMethods, initState);
  const minutesToSeconds = arr[0]?.time.slice(-2) * 60;
  const hoursToSeconds = arr[0]?.time.slice(0, 2) * 60 * 60;
  const initialTime = (hoursToSeconds + minutesToSeconds) * 1000;
  const [timeLeft, { start, pause, resume, reset }] = useCountDown(
    initialTime,
    1000
  );
  console.log(timeLeft / initialTime);

  return arr.map((next, i) => {
    return (
      <Flex alignItems="center" key={i}>
        <Flex w="95%" onClick={() => start()}>
          <Flex
            border="1px solid black"
            borderRadius="10px"
            h="60px"
            w="85%"
            // w={"100%"}
            // w={`${timeLeft / initialTime}%`}
            maxW="87.5%"
            justifyContent="center"
            bg="green.300"
            p={3}
            _hover={{ cursor: "pointer" }}
          >
            <Heading pos="absolute">
              <Flex>
                Time left:{" "}
                {getTimeFormat(
                  initialTime,
                  timeLeft / 1000 / 3600,
                  (timeLeft / 1000 / 60) % 60,
                  timeLeft
                )}
              </Flex>
            </Heading>
          </Flex>
          <Center>
            {/* FIXME:FIXME:FIXME:ADD TOTAL TIME FROM ALL ARRAYSFIXME:FIXME:FIXME: */}

            <Text ml="auto" fontSize="110%">
              Total:{state.inProgress[0].time.slice(0, 2)} hrs{" "}
              {state.inProgress[0].time.slice(-2)} mins
            </Text>
          </Center>
        </Flex>

        {showStartButton ? (
          <Button
            ml="auto"
            colorScheme="linkedin"
            onClick={() => {
              setShowStartButton(false);
              start();
              //   updateMe();
            }}
          >
            Start
          </Button>
        ) : (
          <Button
            ml="auto"
            colorScheme="linkedin"
            onClick={() => {
              setShowStartButton(true);
              pause();
            }}
          >
            Pause
          </Button>
        )}
      </Flex>
    );
  });
}
