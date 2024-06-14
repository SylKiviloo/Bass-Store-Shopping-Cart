var updateSubtotal = function (ele) {
  var price = parseFloat($(ele).find('.price').text()); //get the .price text and the .quantity input value
  var quantity = parseFloat($(ele).find('.quantity input').val()); //(swap .children for .find for input)
  
  var subtotals = price * quantity; //calculate
  //console.log(subtotals)
  $(ele).children('.subtotal').html(subtotals); //inject
  
  return subtotals;//return updated subtotal to DOM
}

var sum = function (acc, x) { return acc + x; };

var updateTotal = function() { //a function to sum the subtotals and update the total
  var subtotalArray = [];
  $('tbody tr').each(function (i, ele) {
    var subtotal = updateSubtotal(ele);
    subtotalArray.push(subtotal);
  });
  var total = subtotalArray.reduce(sum);
  //console.log(total);
  $('#total').html(total);
} 

var randomPrice = function () {
  var number = Math.random() * (3000 - 300) + 300;
  var randomNum = +number.toFixed(0);
  //console.log(randomNum) //showing a random whole number
  return randomNum;
}
randomPrice();

$(document).ready(function () {
  updateTotal();

   $(document).on('click', '.btn.remove', function (event) {
    $(this).closest('tr').remove();
    updateTotal(); //update after a row is removed
  });

  $('tr input').on('input', function () { //update upon input event
    updateTotal();
  });

  var timeout;
  $(document).on('input', 'tr input', function () { //set debounce, change to document
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      updateTotal();
    }, 1000);
});

$('#addProducts').on('submit', function (event) { //in #addProducts, on submit, run this function
  event.preventDefault();  //prevent the default behaviour
  var product = $(this).children('.product').val(); //get the values from the form
  var price = $(this).children('.price').val();
  var quantity = $(this).children('.quantity').val(); //get the invisible fields too
  var subtotal = $(this).children('.subtotal').val();

  //console.log(product, price, quantity, subtotal);

  $('tbody').append('<tr>' + //append all the fields to the table in a new row
    '<td class="product">' + product + '</td>' +
    '<td class="price">' + randomPrice() + '</td>' +
    //'<td class="price">' + price + '</td>' +
    '<td class="quantity"><input type="number" value="' + quantity + '" /></td>' +
    '<td class="subtotal">' + subtotal + '</td>' +
    '<td><button class="btn btn-light btn-sm remove">Remove</button></td>' +
  '</tr>');

  updateTotal(); //call the function
  $(this).children('.product').val(''); //and reset the fields to empty
  $(this).children('.price').val('');
  $(this).children('.quantity').val('');
  $(this).children('.subtotal').val('');
});

}); //end .ready
