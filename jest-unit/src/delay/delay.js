const delay = (callback, ms) =>
  new Promise((resolve, reject) => setTimeout(() => resolve(callback()), ms));

module.exports = delay;
