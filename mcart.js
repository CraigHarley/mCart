if (Meteor.isClient) {

  console.log(Modules);
}



  // //make an array of 2 numbers and add them
  // var array = [3, 4];
  // var sum = function(){
  //   var i, 
  //   sum = 0;
  //   for (i = 0; i < arguments.length; i+= 1){
  //     sum += arguments[i];
  //   }
  //   return sum;
  // };
  // console.log(sum(4,6,7,8,9,9));
  // console.log(sum(array));

  // var Quo = function(string){
  //   this.status = string;
  // }
  // Quo.prototype.get_status = function(){
  //   return this.status;
  // }
  // var myQuo = new Quo("Confused");
  // console.log(myQuo.get_status());




  // //augment my object with a double method
  // var myObject = {
  //   value: 0,
  //   increment: function(inc){
  //     this.value += typeof inc === 'number' ? inc : 1;
  //   }
  // };
  // myObject.double = function() {
  //   var that = this; //workaround
  //   var helper = function(){
  //     that.value = add(that.value, that.value);
  //   }
  //   helper();
  // }

  // myObject.value = 2;
  // myObject.double();
  // console.log(myObject);

