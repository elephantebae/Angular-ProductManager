const model = require("./model");
module.exports = {
    allProducts: function (req, res) {
        model.find({})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    newProduct: function (req, res) {
        model.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    updateProduct: function (req, res) {
        model.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    deleteProduct: function (req, res) {
        model.deleteOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    getProduct: function (req, res) {
        model.findById({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
}