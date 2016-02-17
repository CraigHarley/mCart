Template.cart.helpers({
	itemsInCart: function () {
		return Modules.client.myCart.getItems();
	},
	cartTotals: function(vatAmt){
		return Modules.client.myCart.calcPrice(vatAmt);
	}
});

Template.cart.events({
	'click .btnPlus': function (event) {
		let itemID = event.target.value;
		Modules.client.myCart.incItemByID(itemID, 1);
	},
	'click .btnMinus': function (event) {
		let itemID = event.target.value;
		Modules.client.myCart.incItemByID(itemID, -1);
	},
	'click .btnRemove': function (event) {
		let itemID = event.target.value;
		Modules.client.myCart.removeItemByID(itemID);
	}
});