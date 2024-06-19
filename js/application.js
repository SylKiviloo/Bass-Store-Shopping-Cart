var updateSubtotal = function (ele) {
  var price = parseFloat($(ele).find('.price').text()); 
  var quantity = parseFloat($(ele).find('.quantity input').val()) || 0;
  var subtotals = price * quantity;
  //console.log(subtotals)
  $(ele).children('.subtotal').html(subtotals);
  return subtotals;
}

var sum = function (acc, x) { return acc + x; };

var updateTotal = function() { 
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
  //console.log(randomNum)
  return randomNum;
}
randomPrice();

$(document).ready(function () {
  updateTotal();

  $(document).on('click', '.btn.remove', function (event) {
    $(this).closest('tr').remove();
    updateTotal();
  });

  $('tr input').on('input', function () {
    updateTotal();
  });

  var timeout;
  $(document).on('input', 'tr input', function () { 
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      updateTotal();
    }, 500);
  });

  $('#addProducts').on('submit', function (event) {
    event.preventDefault();
    var product = $(this).children('.product').val();
    var quantity = $(this).children('.quantity').val();
    var subtotal = $(this).children('.subtotal').val();
    //console.log(product, quantity, subtotal);

 
  $('tbody').append('<tr>' + 
    '<td class="product">' + product + '</td>' +
    '<td class="price">' + randomPrice() + '</td>' +
    '<td class="quantity"><input type="number" value="' + quantity + '" /></td>' +
    '<td class="subtotal">' + subtotal + '</td>' +
    '<td><button class="btn btn-light btn-sm remove">Remove</button></td>' +
  '</tr>');

  updateTotal(); 
  $(this).children('.product').val('');
  $(this).children('.price').val('');
  $(this).children('.quantity').val('');
  $(this).children('.subtotal').val('');
});

});
