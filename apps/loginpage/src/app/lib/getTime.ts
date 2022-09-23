const checkTime = () => {
  const date = new Date();
  const hour = date.getHours();
  //check if it is night, morning, day or evening
  if (hour < 12 && hour >= 5) {
    return 'morning';
  }
  if (hour >= 12 && hour < 15) {
    return 'day';
  }
  if (hour >= 15 && hour < 19) {
    return 'evening';
  } else {
    return 'night';
  }
};

export default checkTime;
