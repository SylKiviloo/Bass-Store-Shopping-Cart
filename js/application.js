$(document).ready(function () {

  //$('tbody tr').each(function (i, element) {
    //console.log($(element).children().eq(1).text());
    //(this).children('.price').html(randomPrice); //trying to inject into .price
  
  //});
  var number = Math.random() * (3000 - 300) + 300;
  var randomNum = +number.toFixed(2);
  console.log(randomNum) //showing a random number

 var subtotals = [];

 $('tbody tr').each(function (i, element) {
  
  subtotals.push($('.quantity').text());
  console.log(subtotals);
 });
  //$('tbody tr').children().eq(1).text(randomPrice); //inject into .price?
  //$('tbody tr').children('.price').text(randomPrice); //trying to inject into .price
  //$('form span').children('.price').text(randomPrice); //inject into span?

}); //end of document.ready

var randomPrice = function (element) { //should take a randomNum and inject into .price
  //var number = Math.random() * (3000 - 300) + 300;
  //var randomNum = +number.toFixed(2);
  //console.log(randomNum) //showing 3 random numbers
  $('tbody tr').children('.price').text();  
  return randomPrice;
 }
 console.log(randomPrice())

 var findSubtotal = function () {
  var subtotal = $('tbody tr').children('quantity').eq(0)
  console.log(subtotal);
 }
 //subtotal()
 console.log(findSubtotal());
