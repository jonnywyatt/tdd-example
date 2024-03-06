const names = (firstName, lastName) => {
  if (firstName[0] === lastName[0]) {
    return "Your names start with the same letter!";
  }
  return "Your names start with different letters!";
};

exports.names = names;
