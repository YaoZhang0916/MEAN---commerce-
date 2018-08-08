var products_controller = require('../controllers/products_controller'),
    path                = require('path');


module.exports = function(app) {
  app.get('/api/products', products_controller.products);
  app.get('/api/products/:id', products_controller.product);
  app.post('/api/products/create', products_controller.products_create);
  app.post('/api/products/:id/edit', products_controller.products_edit);
  app.delete('/api/products/delete/:id', products_controller.products_delete);


   app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./public/dist/public/index.html'))
 })
}
