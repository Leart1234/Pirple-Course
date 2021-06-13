var isInteger = (value) => !isNaN(value) && value >= 0;

var ValidLabel = ["seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"];
var isLabelInList = (label) => ValidLabel.indexOf(label) !== -1;

var isValidLabel = (value, label) => {
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
      console.log("Not valid.");
      return false;
  }
}

var minuteSeconds = 60;
var hourSeconds = minuteSeconds * 60;
var daySeconds = hourSeconds * 24;

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
      console.log("not convert to seconds.");
      return false;
  }
}
function timeAdder(value1, label1, value2, label2) {
   
    if (!isInteger(value1,value2)) {
        return false;
      }

      else if (!isLabelInList(label1,label2)) {
        return false;
      }
    
      else if (!isValidLabel(value1, label1)) {
        return false;
      }
    
      else if (!isValidLabel(value2, label2)) {
        return false;
      }

      var seconds1 = convertToSeconds(value1, label1);
      var seconds2 = convertToSeconds(value2, label2);
    
     var result = seconds1 + seconds2;
 
     return result;
  }
 ;
    console.log(timeAdder(1,"minute",3,"minutes"));

    console.log(timeAdder(5,"days",25,"hours"));
    
    console.log(timeAdder(1,"minute",240,"seconds"));

    
    
