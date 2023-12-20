
const EmployeeController = require('../controllers/employee.controllers'); 
const ProductController = require('../controllers/product.controllers'); 
// const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
    app.get('/api/employee/all',  EmployeeController.AllEmployee);
    app.post('/api/employee/new', EmployeeController.createEmployee);
    app.get('/api/oneemployee/:id',  EmployeeController.getOneEmployee);
    app.patch('/api/employee/:id', EmployeeController.updateEmployee);
    app.delete('/api/delete/:id', EmployeeController.deleteEmployee);
    app.post("/api/register", EmployeeController.register);
    app.post("/api/login",  EmployeeController.login);
    app.post("/api/logout", EmployeeController.logout);

  // Product routes

    app.get('/api/product/all', ProductController.AllProduct);
    app.post('/api/product/new', ProductController.createProduct);
    app.get('/api/oneproduct/:id', ProductController.getOneProduct);
    app.patch('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/delete/:id', ProductController.deleteProduct);
}