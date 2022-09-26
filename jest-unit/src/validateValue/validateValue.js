const validateValue = (num) => {
  if (num < 0 || num > 100) return false;
  return true;
};

module.exports = validateValue;
