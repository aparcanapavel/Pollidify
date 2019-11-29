const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePollInput(data) {
  let errors = {};

  data.question = validText(data.question) ? data.question : '';

  if (!Validator.isLength(data.question, { min: 8, max: 100 })) {
    errors.question = 'Question must be between 8 and 100 characters';
  }

  if (Validator.isEmpty(data.question)) {
    errors.question = 'Question field cannot be empty';
  }

  let dateObj = new Date(data.expiration_date);
  let today = new Date();

  if (dateObj.getTime() - today.getTime() > 1000*60*60*24*90) {
    errors.expiration_date = 'Duration cannot be longer than 90 days';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};