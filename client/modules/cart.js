let myCart = (function(){
    var items = new Meteor.Collection('shopping-cart', {connection: null});
    var shoppingCartObserver = new PersistentMinimongo(items); // create a local persistence observer

  return {
    getItems: () =>{
      //returns a cursor, use fetch() for array
      return items.find({});
    },
    insertItem: (_item, _price, _quantity) =>{
      try {
        if ((typeof _item === 'string') && (typeof _price === 'number') && (typeof _quantity === 'number')){
          if (items.findOne({name:_item})){
            items.update({  name: _item}, 
                         {  $set: {
                              price: _price,
                              quantity:_quantity}
                         });
          } else {
            items.insert({  name: _item,
                            price: _price,
                            quantity: _quantity});
            }
            return 1;
        } else {
          throw new Error('Invalid parameter sent to insert item.');
        }
      } catch(e) {
        return e;
      }
    },
    incItemByID: (_inputId, _amt)=>{
        items.update(
          { _id: _inputId},
          { $inc: { quantity: _amt} });
   
      if (items.findOne({_id: _inputId}, {quantity: 1}).quantity <= 0){
        items.remove({_id: _inputId});
      }

    },
    removeItemByID: (_inputId)=>{
      items.remove({
        _id: _inputId
      });
    },
    clearCart: () =>{
      items.remove({});
    },
    calcPrice: (_vat) =>{
      _vat = _vat || 1; //default to 1
      let _total = 0;
      items.find({}).forEach(function (element, index) {
        _total = _total + (element.price * element.quantity);
      });

      let _postvat = _total * _vat;
      let _vatAmt  = _postvat - _total;

      return {
              prevatTotal: _total.toFixed(2),
              vatAmt: _vatAmt.toFixed(2),
              total: (_total + _vatAmt).toFixed(2)
             }; 
    }
  }
})();
Modules.client.myCart = myCart; //exposes mycart
