const product = require('../models/product.models');

module.exports ={
    // create
    createProduct: (req, res) => {
        product.create(req.body)
            .then(newProduct => res.json(newProduct))
            .catch((err => res.status(400).json(err)));
                },
    // read
    AllProduct: (req, res) => {
        product.find()
            .then(allProduct => res.json(allProduct))
            .catch((err => res.json(err)));
            },

    // read one
    getOneProduct: (req, res) => {
        product.findById(req.params.id)
            .then(oneProduct => res.json(oneProduct))
            .catch(err => res.json(err));
    },
    // update, add in validator function

    updateProduct: (req, res) => {
        product.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        .then(updateProduct => res.json(updateProduct))
        .catch((err => res.status(400).json(err)));
                },
        // .catch(err => res.json(err));
    // },
    // delete
    deleteProduct: (req, res) => {
        product.findByIdAndDelete(req.params.id)
        .then(deleteProduct => res.json(deleteProduct))
        .catch(err => res.json(err));
    },

}