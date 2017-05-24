var controller = require("./../controllers/controller.js")


module.exports = function(app){
    app.get("/get_users",controller.get_users)
    app.post("/create",controller.create_user)
    app.post("/edit",controller.edit_user)
    app.get("/delete/:id",controller.delete_user)
    app.get("/findOne/:id",controller.show_user)
}