const app = require("../app")
const register = require("../controller/controller")

//Register
app.post('/register',register)

//Login
app.post('/login')