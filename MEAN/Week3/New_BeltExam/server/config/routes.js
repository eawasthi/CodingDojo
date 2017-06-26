var controller = require("./../controllers/controller.js")


module.exports = function(app){
    app.get("/users",controller.get_all_users)
    app.get('/loggedin',controller.loggedin)
    app.post("/create",controller.create)
    app.post('/find',controller.find)
    app.get('/logout', controller.logout)
    app.post('/questioncreate', controller.questioncreate)
    app.get('/getAll_Questions', controller.getAll_Questions)
    app.get("/getAnyUserQuestion/:id",controller.getAnyUserQuestion)
    app.get("/delete/:id",controller.delete_question)
    app.get("/addVote1/:id",controller.addVotes1)
    app.get("/addvote2/:id",controller.addVotes2)
    app.get("/addvote3/:id",controller.addVotes3)
    app.get("/addvote4/:id",controller.addVotes4)
}