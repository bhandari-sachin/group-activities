const config = require("./config");
console.log("Database: ", config.MONGO_URI);
console.log("Environment: ", config.NODE_ENV);
console.log("Port: ", config.PORT);
