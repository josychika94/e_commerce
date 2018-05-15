//edited copy
//E-commerce program
//#Chika
//Run my business

//declaring variables for the first store
var str = '';

    var myStore = [
        {productName : "Generator", price : 12000,    quantity : 5},
        {productName : "Aeroplane", price : 100000,   quantity : 1},
        {productName : "Pullover",  price : 5000,     quantity : 6},
        {productName : "Textbooks", price : 45000,    quantity : 3},
    ];
    //declaring variables for list of orders
    var orders = [
        {productName : "school",    quantity : 3},
        {productName : "Pullover",  quantity : 3},
        {productName : "Aeroplane", quantity : 1},
    ];
    function buyProduct(store,listOfOrder){
    //declaring other variables
    var totalPrice = 0;
    var newQuantity = 0;
    var newStore = [];
    var check;
   
   
    //checking and comparing ordered items and items in the store
    orders.forEach(item =>{
        myStore.forEach(product =>{
             if(product.productName == item.productName){
                if(item.quantity <= product.quantity){
                    totalPrice = item.quantity * product.price;
                    newQuantity = product.quantity - item.quantity;
                    newStore =["TotalPrice:" + totalPrice + " " +"QuantityLeft:"+newQuantity];
                    console.log(newStore);
                } else {
                    console.log("we are out of stock");
                }
            } else {
                check = ("check the next store");
              }
        });
    });
return check;
}

console.log(buyProduct(myStore, orders));
