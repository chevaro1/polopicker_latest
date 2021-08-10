

$(document).ready(function() {
  loadSelect();
})

$('#prodtype').on('change', function() {
  getProducts(this.value);
});

function loadSelect(){
  $.ajax({
    type: 'POST',
    url: '../sql/get_all_product_types.php',
    //data: {login: login, fname: name, password: password1, status:priv},
    success: function(response) {
      var arr = JSON.parse(response);
      if (arr.status == "fail"){
        alert("Could not access prodtype");
      } else{
        var arr = JSON.parse(response);
        printSelect(arr);
      }
    },
    error:function(x,e) {
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
  });
}


function printSelect(arr){
  var out = '<option value="0" selected>Choose...</option>';
  for(var i = 0; i < arr.length; i++) {
    out += '<option value="' + arr[i].product + '">' + arr[i].product + ' (' + arr[i].total + ')</option>';
  }
  $('#prodtype').html(out);
}


function getProducts(cat){
  $.ajax({
    type: 'POST',
    url: '../sql/get_products_by_product_types.php',
    data: {cat: cat},
    success: function(response) {
      var arr = JSON.parse(response);
      if (arr.status == "fail"){
        alert("Could not access prodtype");
      } else{
        var arr = JSON.parse(response);
        printProducts(arr);
      }
    },
    error:function(x,e) {
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
  });
}


function printProducts(arr){
  var out = "";
  for(var i = 0; i < arr.length; i++) {
    var name = arr[i].website;
    name = name.replaceAll("_", " ");
   out +=  '<div class=\"col-md-3 col-lg-3 mb-4 text-center\">' +
           '<div class=\"product-entry border\">' +
           '<div class=\"desc\">' +
           '<h2><a href=\"' + arr[i].link + '\">' + name + '</a></h2>' +
           '</div>' +
           '<a href=\"' + arr[i].link + '\" class=\"prod-img\">' +
           '<img src="' + arr[i].img + '" class=\"img-fluid\" alt=\"product image\">' +
           '</a>' +
           '<div class=\"desc\">' +
           '<h2><a href=\"' + arr[i].link + '\">' + arr[i].name + '</a></h2>' +
           '<span class=\"price\">' + arr[i].price +'</span>' +
           '</div>' +
           '<div class=\"desc\">' +
           '<span class=\"price\">Prodtype: ' + arr[i].product +'</span>' +
           '<span class=\"price\">Gender: ' + arr[i].gender +'</span>' +
           '<span class=\"price\">Colour: ' + arr[i].colour +'</span>' +
           '<span class=\"price\">Brand: ' + arr[i].brand +'</span>' +
           '</div>' +
           '</div>' +
           '</div>';

  }
  $('#products').html(out);
}
