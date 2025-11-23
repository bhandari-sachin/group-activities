const bcrypt = require("bcrypt");

// Closure that stores configuration and returns two functions
function passwordService() {
  const saltRounds = 10; // <-- stored in closure, not global

  async function hashPassword(password) {
    try {
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      console.log("Salt Rounds:", saltRounds);
      console.log("Hashed Password:", hashedPassword);
      return hashedPassword;
    } catch (error) {
      console.error("Error hashing password:", error);
    }
  }

  async function comparePassword(inputPassword, hashedPassword) {
    try {
      console.log("Comparing passwords...");
      const isMatch = await bcrypt.compare(inputPassword, hashedPassword);
      return isMatch;
    } catch (error) {
      console.error("Error comparing passwords:", error);
    }
  }

  // functions available outside, but saltRounds remains private
  return { hashPassword, comparePassword };
}

module.exports = passwordService();
