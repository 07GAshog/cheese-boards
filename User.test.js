const {Board, Cheese, User} = require("./Models")
const  db  = require("./db")

describe("Testing if User db works", () => {
    test("Testing if user can be created", async () => {
        await db.sync({force: true})
        await User.create({
            name: "Gabriel",
            email: "gabriel@outlook.com"
        })
        user1 = await User.findByPk(1)
        expect(user1.id).toBe(1)
    })

    test("User has a one to many relationship", async () => {
        await db.sync({force: true})
        const user1 = await User.create({
            name: "Gabriel",
            email: "gabriel@outlook.com"
        })
        const board1 = await Board.create({
            type: "Board",
            description: "Woody board",
            rating: " 5"
        })
    
        const board2 = await Board.create({
            type: "glass",
            description: "See through",
            rating: "6"
        })
    
        await user1.addBoard(board1)
        await user1.addBoard(board2)
    
        allBoards = await user1.getBoards()
    
        expect(allBoards.length).toBe(2)
    })
})
// npm run test 