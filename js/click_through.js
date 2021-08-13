var timeframe = parseInt($('#product-timeframe :selected').val());
const debugMode = true;

function log(output){
  if (debugMode) {
    console.log(output);
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                   These 2 functions handle calling the data on startup and when the timeframe changes
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


$(document).ready(function() {
  getData();
  getRecentProducts();
})


$('#product-timeframe').on('change', function() {
  timeframe = parseInt(this.value);
  getData();
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                       the following functions handle getting the product data and printing it
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


function getData(){
  $.ajax({
    type: 'POST',
    url: '../sql/get_click_through_data.php',
    data: {timeframe: timeframe},
    success: function(response) {
      var arr = JSON.parse(response);
      if (arr.status == "fail"){
        throwInvalidError("Error Getting Staff", arr.message);
      } else{
        var arr = JSON.parse(response);
        printProductData(arr);
      }
    },
    error:function(x,e) {
      if (debugMode) {
        if (x.status==0) {
            alert('You are offline!!\n Please Check Your Network.');
        } else if(x.status==404) {
            alert('Requested URL not found.');
        } else if(x.status==500) {
            alert('Internel Server Error.');
        } else if(e=='parsererror') {
            alert('Error.\nParsing JSON Request failed.');
        } else if(e=='timeout'){
            alert('Request Time out.');
        } else {
            alert('Unknow Error.\n'+x.responseText);
        }
      }
    }
  });
}

function printProductData(arr){
  $('#total-products').html(arr.total);
  $('#average-products').html(arr.average);

  var out = "";
  for(var i = 0; i < arr.popular.length; i++) {
    out += "<tr>";
    out += "<td>" + arr.popular[i].name + "</td>";
    out += "<td>" + arr.popular[i].total + "</td>";
    out += "<tr>";

  }
  out += '</div>'
  $('#popular-products-table').html(out);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                           the following functions handle getting the recent product clicks and printing them
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


function getRecentProducts(){
  $.ajax({
    type: 'POST',
    url: '../sql/get_recent_product_clicks.php',
    data: {timeframe: timeframe},
    success: function(response) {
      var arr = JSON.parse(response);
      if (arr.status == "fail"){
        throwInvalidError("Error Getting Staff", arr.message);
      } else{
        var arr = JSON.parse(response);
        printRecentProducts(arr);
      }
    },
    error:function(x,e) {
      if (debugMode) {
        if (x.status==0) {
            alert('You are offline!!\n Please Check Your Network.');
        } else if(x.status==404) {
            alert('Requested URL not found.');
        } else if(x.status==500) {
            alert('Internel Server Error.');
        } else if(e=='parsererror') {
            alert('Error.\nParsing JSON Request failed.');
        } else if(e=='timeout'){
            alert('Request Time out.');
        } else {
            alert('Unknow Error.\n'+x.responseText);
        }
      }
    }
  });
}

function printRecentProducts(arr){
  var out = "";
  for(var i = 0; i < arr.length; i++) {
    out += "<tr>";
    out += "<td>" + arr[i].name + "</td>";
    out += "<td>" + arr[i].price + "</td>";
    out += "<td>" + arr[i].datetime + "</td>";
    out += "<tr>";

  }
  out += '</div>'
  $('#recent-products').html(out);
}
