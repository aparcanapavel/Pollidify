const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateChoiceInput(data) {
  let choiceErrors = {};

  data = validText(data) ? data : '';

  if (!Validator.isLength(data, { min: 1, max: 60 })) {
    choiceErrors.response = 'Response must be between 1 and 60 characters';
  }

  if (Validator.isEmpty(data)) {
    choiceErrors.response = 'Invalid response input';
  }

  return {
    choiceErrors,
    isChoiceValid: Object.keys(choiceErrors).length === 0
  };
};