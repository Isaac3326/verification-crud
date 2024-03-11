const EmailCode = require("./EmailCode");
const Users = require("./Users");



EmailCode.belongsTo(Users)
Users.hasOne(EmailCode)