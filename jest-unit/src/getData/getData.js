const axios = require("axios");
const mapNumbersToStrings = require("../mapNumbersToStrings/mapNumbersToStrings");

const getData = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const userIds = res.data.map((user) => user.id);
    return mapNumbersToStrings(userIds);
  } catch (e) {}
};

module.exports = getData;
