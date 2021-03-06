var controller = require("./../controllers/controller.js")


module.exports = function(app){
    app.get("/users",controller.get_all_users)
    app.post("/create",controller.create_user)
    app.post("/edit/:id",controller.edit_user)
    app.get("/delete/:id",controller.delete_user)
    app.get("/show/:id",controller.show_user)
}