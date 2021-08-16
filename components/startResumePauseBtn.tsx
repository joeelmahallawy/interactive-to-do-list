import { Button } from "@chakra-ui/react";
import React from "react";

export default function startResumePauseBtn(
  setTo,
  setterFunc,
  func,
  text,
  color,
  setShowTotal = null,
  initVal = 0
) {
  return (
    <Button
      w="75%"
      m="0 auto"
      mt={1.5}
      p={5}
      colorScheme={color}
      _focus={{ outline: "none" }}
      onClick={() => {
        setterFunc(setTo);
        func(initVal);
        setShowTotal !== null && setShowTotal(false);
      }}
    >
      {text}
    </Button>
  );
}
