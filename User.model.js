const { Model, Datatypes } = require("sequelize")
const { db } = require("./db")

class User extends Model { }

User.init({
    name: {
        type: Datatypes.TEXT,
        primaryKey: true
    },
    email: {
        type: Datatypes.TEXT
    }
})

// Planet.init({
//     name: {
//         type: DataTypes.TEXT
//     },
//     moons: {
//         type: DataTypes.INTEGER
//     },
//     mass: {
//         type: DataTypes.REAL
//     }
// }, {sequelize: db})