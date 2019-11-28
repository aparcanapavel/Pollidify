const Validator = require('validator');
const validQuestion = require('./valid-question');
const validText = require('./valid-text');

module.exports = function validatePollInput(data) {
  let errors = {};

  data.question = validText(data.question) ? data.question : '';
  debugger;

  if (!Validator.isLength(data.question, { min: 8, max: 100 })) {
    errors.question = 'Question must be between 8 and 100 characters';
  }

  if (Validator.isEmpty(data.question)) {
    errors.question = 'Question field cannot be empty';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};