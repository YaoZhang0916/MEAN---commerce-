var Product = require('../models/products_model');

module.exports = {

  products: function(req, res){

    Product.find({}, (err, products) => {
      if (err) {
        res.json({'message': 'error', 'errors': ['Couldnt {Product}.find()']});
      }
      else {
        console.log("this is in server")
        res.json({'message': 'success', 'data': products});
      }
    });
  },

  product: function(req, res){
    id = req.params.id;
    Product.findById(id, (err, product) => {
      if (err) {
        res.json({'err': 'error'});
      }
      else {
        res.json(product);
      }
    });
  },

  products_create: (req, res) => {
    t = new Product();
    // req.body contains the  passed in from createProducts in http.service.ts
    t.name = req.body.name;
    t.qty = req.body.qty;
    t.price = req.body.price;

    t.save((err) => {
      if (err) {
        res.json({'error': err});
      }
      else {
        res.json({'success': 'success create'});
      }
    });
  },

  products_edit:(req, res) =>{
    console.log(req.body);
     const newproduct ={
       name : req.body.name,
       qty : req.body.qty,
       price : req.body.price,
       updatedAt:Date.now(),
     };

    // Product.findOneAndUpdate(
    //   {_id:req.paramas.id},
    //   {$set:{name:req.body.name, qty:req.body.qty, price:req.body.price}},
    //   {runValidators:true},
    //   function(err, product){
    //     if(err){
    //       res.json({'error':err});
    //     }
    //     else{
    //       res.json(product);
    //     }
    //   } 
    // )

     Product.update({_id:req.params.id}, newproduct, {runValidators:true},function(err,product){
       if(err){
         res.json({'error':err});
       }
       else{
         res.json(product);
       }
     })
  },

  products_delete :(req, res) =>{
    console.log("I want to delete something")
    console.log(req.body);
    console.log(req.params);
    Product.findOneAndRemove({_id:req.params.id}, (err, product)=>{
      console.log(req.body.id)
      if(err){
        res.json(err)
      }
      else{
        res.json({msg:"Deleted one product"})
      }
    })
  }

}
