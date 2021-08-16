import { Box, Flex, Text } from "@chakra-ui/layout";
import { useEffect } from "react";

export default function getTimeFormat(
  initTime,
  hoursSeconds,
  minutesSeconds,
  timeForSeconds
) {
  const hour = Math.floor(hoursSeconds);
  const minutes = Math.floor(minutesSeconds);
  const seconds = (timeForSeconds / 1000) % 60;
  const initHour = Math.floor(initTime / 1000 / 3600);
  const initMinute = Math.floor((initTime / 1000 / 60) % 60);

  if (hoursSeconds == 0 && minutesSeconds == 0) {
    return initHour == 0 ? (
      <Flex ml={3}>
        {initMinute < 10 ? "0" + initMinute : initMinute}
        <Text fontSize="75%" pos="relative" bottom="-2" mr={2}>
          m
        </Text>
        {seconds < 10 ? "0" + seconds : seconds}
        <Text fontSize="75%" pos="relative" bottom="-2" mr={2}>
          s
        </Text>
      </Flex>
    ) : (
      <Flex ml={3}>
        {initHour}
        <Text fontSize="75%" pos="relative" bottom="-2" mr={2}>
          h
        </Text>
        {initMinute < 10 ? "0" + initMinute : initMinute}
        <Text fontSize="75%" pos="relative" bottom="-2" mr={2}>
          m
        </Text>
        {seconds < 10 ? "0" + seconds : seconds}
        <Text fontSize="75%" pos="relative" bottom="-2" mr={2}>
          s
        </Text>
      </Flex>
    );
  }

  return hour == 0 ? (
    <Flex ml={3}>
      {minutes < 10 ? "0" + minutes : minutes}
      <Text fontSize="75%" pos="relative" bottom="-2" mr={2}>
        m
      </Text>
      {seconds < 10 ? "0" + seconds : seconds}
      <Text fontSize="75%" pos="relative" bottom="-2" mr={2}>
        s
      </Text>
    </Flex>
  ) : (
    <Flex ml={3}>
      {hour}
      <Text fontSize="75%" pos="relative" bottom="-2" mr={2}>
        h
      </Text>

      {minutes < 10 ? "0" + minutes : minutes}
      <Text fontSize="75%" pos="relative" bottom="-2" mr={2}>
        m
      </Text>
      {seconds < 10 ? "0" + seconds : seconds}
      <Text fontSize="75%" pos="relative" bottom="-2" mr={2}>
        s
      </Text>
    </Flex>
  );
}
