const messageRegex = /\s/;

const validateMessage = (text) => {
  if (messageRegex.test(text)) {
    return false;
  } else if (text === '') {
    return false;
  } else {
    return true;
  }
};

export default validateMessage;
