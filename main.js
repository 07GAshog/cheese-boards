const {Board} = require("./Board.model")
const {Cheese} = require("./Cheese.model")
const {User} = require("./User.model")


User.hasMany(Board)
Board.belongsTo(User)