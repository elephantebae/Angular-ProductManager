const controller = require("./controller");
const path = require("path");
module.exports = app => {
    app.get("/api/allProducts", controller.allProducts);
    app.post("/api/newProduct", controller.newProduct);
    app.put("/api/:id", controller.updateProduct);
    app.get("/api/:id", controller.getProduct);
    app.delete("/api/:id", controller.deleteProduct);
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./manager/dist/manager/index.html"))
    });
}