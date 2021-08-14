import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Countdown from "react-countdown";
// FIXME:FXIME:FIXME:

export default function RenderUpNext({ arr }) {
  return arr.map((next, i) => {
    const minutesToSeconds = next.time.slice(-2) * 60;
    const hoursToSeconds = next.time.slice(0, 2) * 60 * 60;
    const MAX_TIME = {
      hours: 4,
      mintues: 0,
    };

    return (
      <>
        <Flex
          key={i}
          border="1px solid black"
          borderRadius="10px"
          w="85%"
          //   w={`${Number((MAX_TIME.hours * 60 * 60) / hoursToSeconds)}%`}
          //CALCULATRE WIDTH ABSED ON TIME
          maxWidth="85%"
          h="60px"
          // FIXME:FIXME:FIXME:

          justifyContent="center"
          bg="green.300"
          p={3}
          _hover={{ cursor: "pointer" }}
        >
          {/* <Center fontWeight="400" fontSize="lg"> */}
          {console.log(hoursToSeconds * 60 * 60, minutesToSeconds * 60)}
          <Heading>
            <Countdown
              autoStart={false}
              date={Date.now() + (minutesToSeconds + hoursToSeconds) * 1000}
            />
          </Heading>
          {/* </Center> */}
        </Flex>
        <Box bg="red" ml="auto">
          <Text ml="auto">{`Total: ${hoursToSeconds / 60 / 60}hrs ${
            minutesToSeconds / 60
          }mins`}</Text>
        </Box>
      </>
    );
  });
}
