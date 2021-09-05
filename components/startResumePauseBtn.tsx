import { Button } from "@chakra-ui/react";
import React from "react";
import useSound from "use-sound";

export default function startResumePauseBtn(
  setTo,
  setterFunc,
  func,
  text,
  color,
  setShowTotal = null,
  stateFunc = null,
  initVal = 0
) {
  return (
    <Button
      w="75%"
      m="0 auto"
      mt={1.5}
      colorScheme={color}
      _focus={{ outline: "none" }}
      onClick={() => {
        setterFunc(setTo);
        func(initVal);
        setShowTotal !== null && setShowTotal(false);
        stateFunc !== null && stateFunc(true);
      }}
    >
      {text}
    </Button>
  );
}
