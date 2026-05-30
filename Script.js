let total = 0;

function addToCart(price){

  total = total + price;

  document.getElementById("total").innerHTML = total;

  alert("Item Added To Cart");
}

function placeOrder(){

  if(total == 0){

    alert("Cart is Empty");
  }

  else{

    let payment = prompt(
      "Enter Payment Method: COD / UPI / Card"
    );

    alert(
      "Order Placed Successfully\nPayment Method: " + payment
    );

    total = 0;

    document.getElementById("total").innerHTML = total;
  }
}