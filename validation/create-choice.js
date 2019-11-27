const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateChoiceInput(data) {
  let errors = {};

  data.response = validText(data.response) ? data.response : '';

  if (!Validator.isLength(data.response, { min: 1, max: 60 })) {
    errors.response = 'Response must be between 1 and 60 characters';
  }

  if (Validator.isEmpty(data.response)) {
    errors.response = 'Response field cannot be empty';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};