const { check } = require('express-validator/check');
module.exports = {
  addPosts() {
    return [
      check(['name', 'text'])
        .not().isEmpty().withMessage(['Field is required'])
        .trim()
        .escape(),
      check(['url'])
        .optional()
        .isURL().withMessage(['Please provide a valid URL'])
    ];
  },
  updatePosts() {
    return [
      check(['name', 'text'])
        .optional()
        .not().isEmpty().withMessage(['Field is required'])
        .trim()
        .escape(),
      check(['url'])
        .optional()
        .isURL().withMessage(['Please provide a valid URL'])
    ];
  },
};
