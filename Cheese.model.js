const { Model, Datatypes } = require("sequelize")
const { db } = require("./db")

class Cheese extends Model { }

Cheese.init({
    name: {
        title: Datatypes.TEXT,
    },
    description: {
        type: Datatypes.TEXT
    }
})