const { Model, Datatypes } = require("sequelize")
const { db } = require("./db")

class Board extends Model{}

Board.init({
    type: {
        type: Datatypes.TEXT
    },
    description: {
        type: Datatypes.TEXT
    },
    rating: {
        type: Datatypes.INTEGER
    }
})