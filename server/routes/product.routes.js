
const ProductController = require('../controllers/product.controllers'); 

module.exports = (app) => {
    app.get('/api', ProductController.AllProduct);
    app.post('/api/product/new', ProductController.createProduct);
    app.get('/api/oneproduct/:id', ProductController.getOneProduct);
    app.patch('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/delete/:id', ProductController.deleteProduct);
}