var controller = require("./../controllers/controller.js")


module.exports = function(app){
    app.get("/users",controller.get_all_users)
    app.get("/gettopics",controller.get_topics)
    app.get('/loggedin',controller.loggedin)
    app.post("/create",controller.create)
    app.post('/find',controller.find)
    app.post('/createInfo',controller.createInfo)
    app.get('/logout', controller.logout)
    app.get("/show/:id",controller.show_user)
}