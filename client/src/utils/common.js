const prefix = ""

function isDate(date) {
    // https://thewebdev.info/2021/03/27/how-to-check-if-a-string-is-a-date-string-with-javascript/
    return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
}

function isInt(value) {
    // https://stackoverflow.com/questions/14636536/how-to-check-if-a-variable-is-an-integer-in-javascript/27424770
    if (isNaN(value)) {
      return false;
    }
    var x = parseFloat(value);
    return (x | 0) === x;
  }
