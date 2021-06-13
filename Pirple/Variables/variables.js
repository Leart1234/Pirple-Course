const isInteger = (value) => !isNaN(value) && value >= 0;

const validLabels = ["seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"];
const isLabelInList = (label) => validLabels.indexOf(label) !== -1;

const isValidLabel = (value, label) => {
  switch (label) {
    case "second":
    case "minute":
    case "hour":
    case "day":
      return (value === 1) ? true : false;
    case "seconds":
    case "minutes":
    case "hours":
    case "days":
      return (value === 1) ? false : true;
    default:
      console.log("Label not valid.");
      return false;
  }
}

const minuteSeconds = 60;
const hourSeconds = minuteSeconds * 60;
const daySeconds = hourSeconds * 24;

const convertToSeconds = (value, label) => {
  switch (label) {
    case "second":
    case "seconds":
      return value;
    case "minute":
    case "minutes":
      return value * minuteSeconds;
    case "hour":
    case "hours":
      return value * hourSeconds;
    case "day":
    case "days":
      return value * daySeconds;
    default:
      console.log("Can't convert to seconds.");
      return false;
  }
}

const convertToLarger = (seconds) => {
  if (seconds % daySeconds === 0) {
    const days = seconds / daySeconds;
    return (days === 1) ? [days, 'day'] : [days, 'days'];
  } else if (seconds % hourSeconds === 0) {
    const hours = seconds / hourSeconds;
    return (hours === 1) ? [hours, 'hour'] : [hours, 'hours'];
  } else if (seconds % minuteSeconds === 0) {
    const minutes = seconds / minuteSeconds;
    return (minutes === 1) ? [minutes, 'minute'] : [minutes, 'minutes'];
  } else {
    return (seconds === 1) ? [seconds, 'second'] : [seconds, 'seconds'];
  }
}
for (let position = 1; position <= 100; position++) {
  if (isPrime(position)) {
    console.log("Prime");
  } else if (position % 3 === 0 && position % 5 === 0) {
    console.log("FizzBuzz");
  } else if (position % 3 === 0) {
    console.log("Fizz");
  } else if (position % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(position);
  }
}
timeAdder.forEach(value1, label1, value2, label2) =>  {
  
}
  

const timeAdder = (value1, label1, value2, label2) => {
  // check values
  if (!isInteger(value1)) {
    return false;
  }

  if (!isInteger(value2)) {
    return false;
  }

  // check labels
  if (!isLabelInList(label1)) {
    return false;
  }

  if (!isLabelInList(label2)) {
    return false;
  }

  // check values and labels
  if (!isValidLabel(value1, label1)) {
    return false;
  }

  if (!isValidLabel(value2, label2)) {
    return false;
  }

  // convert values to seconds
  const seconds1 = convertToSeconds(value1, label1);
  const seconds2 = convertToSeconds(value2, label2);

  // add seconds
  const result = seconds1 + seconds2;

  // return the value in larger possible format
  return convertToLarger(result);
}

// Correct

console.log(timeAdder( 3 , "days",    25, "hours"));
