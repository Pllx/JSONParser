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
  //var EOA = string.lastIndexOf(']');
  var opener = 0;
  var closer = 0;
  var element = "";
  var elem = "";
  var elements = [];

  //removes array braces
  string = string.slice(1,string.length-1);

  for (var i = 0; i < string.length; i++) {
    if (string[i] !== '[' && string[i] !== ']') {
      // if (string[i] === ',' || i === string.length-1) {
      //   elements.push(element);
      //   element = "";
      // }
      // else {
      //   element += string[i];
      //   //console.log(element);
      // }
      if (string[i] !== ',') {
        elem += string[i];
      }
      if (i === string.length-1 || string[i] === ',') {
        elements.push(elem);
        elem = "";
      }
    }

    if (string[i] === '[') {
      elements.push(string[i]);
      opener++;
    }
    if (string[i] === ']') {
      element += (string[i]);
      if (--opener === 0) {
        console.log('pushing',element);
        elements.push(element);
        element = "";
      }
    }

  }

  // var elements = string.slice(1,EOA).split(',');
  var convertedArray = [];

  for (var i = 0; i < elements.length; i++) {
    convertedArray.push(JSONConverter(elements[i]));
  }
  return convertedArray;
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
