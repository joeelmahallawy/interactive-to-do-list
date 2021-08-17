export default function colorTransitioner(timeLeft, initTime) {
  const timeLeftInPercent = (timeLeft / initTime) * 100;
  if (timeLeftInPercent) {
    switch (true) {
      case timeLeftInPercent >= 90 && timeLeftInPercent < 100:
        return "green.300";
      case timeLeftInPercent >= 80 && timeLeftInPercent < 90:
        return "teal.300";
      case timeLeftInPercent >= 70 && timeLeftInPercent < 80:
        return "blue.300";
      case timeLeftInPercent >= 60 && timeLeftInPercent < 70:
        return "cyan.300";
      case timeLeftInPercent >= 50 && timeLeftInPercent < 60:
        return "purple.300";
      case timeLeftInPercent >= 40 && timeLeftInPercent < 50:
        return "pink.300";
      case timeLeftInPercent >= 30 && timeLeftInPercent < 40:
        return "yellow.400";
      case timeLeftInPercent >= 20 && timeLeftInPercent < 30:
        return "orange.300";
      case timeLeftInPercent >= 10 && timeLeftInPercent < 20:
        return "red.300";
      case timeLeftInPercent >= 0 && timeLeftInPercent < 10:
        return "red.500";
    }
  } else {
    return "green.300";
  }
}
