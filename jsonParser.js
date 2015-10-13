function JSONParser(string) {
  //remove spaces and call converter
  return JSONConverter(string.replace(/\s/g,''));
}

//string is a string with no spaces
function JSONConverter(string) {
  //check if it's a primitive
  if (string === 'true') {
    return true;
  }
  if (string === 'false') {
    return false;
  }
  if (string === 'null') {
    return null;
  }

  //number
  if (!isNaN(string)) {
    return parseInt(string);
  }

  // checks if strings
  if (string[0] === '"' || string[0] === "'") {
    return stringParser(string);
  }

  //arrays
  if (string[0] === '[') {
    return arrayParser(string);
  }

  //objects
}

function arrayParser(string) {
  var EOA = string.lastIndexOf(']');
  // var elements = string.slice(1,EOA).split(',');
  // var convertedArray = [];
  //
  // for (var i = 0; i < elements.length; i++) {
  //   convertedArray.push(JSONConverter(elements[i]));
  // }
  // return convertedArray;
}

function stringParser(string) {
  if (string[0] === '"') {
    //EOS is end of string
    var EOS = string.lastIndexOf('"');
    return string.slice(1, EOS);
  }
  if (string[0] === "'") {
    //EOS is end of string
    var EOS = string.lastIndexOf("'");
    return string.slice(1, EOS);
  }
}
