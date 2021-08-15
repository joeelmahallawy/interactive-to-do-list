// import { Button, Flex, Heading, Text } from "@chakra-ui/react";
// import { time } from "console";
// import React from "react";
// import { useState } from "react";
// import useCountDown from "react-countdown-hook";
// import getTimeFormat from "../helpers/getTimeFormat";

// export default function CountDownTimer({ hoursInSeconds, minutesInSeconds }) {
//   const initialTime = hoursInSeconds + minutesInSeconds;
//   const interval = 1000;

//   const [timeLeft, { start, pause, resume, reset }] = useCountDown(
//     initialTime,
//     interval
//   );

//   React.useEffect(() => {
//     // start();
//   }, []);

//   return (
//     <>
//       <Heading pos="absolute">
//         Time left: {getTimeFormat(hoursInSeconds, minutesInSeconds, timeLeft)}
//       </Heading>
//     </>
//   );
// }
