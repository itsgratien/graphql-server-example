const mongoose = require("mongoose");

module.exports = async function () {
  try {
    await mongoose.connect(`mongodb://localhost:27017/gqlexample`);
    return undefined;
  } catch (error) {
    throw error;
  }
};
