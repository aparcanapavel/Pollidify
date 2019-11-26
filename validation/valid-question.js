const validQuestion = str => {
  return str.charAt(str.length - 1) === '?';
}

module.exports = validQuestion;