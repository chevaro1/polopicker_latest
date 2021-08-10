

$(document).ready(function() {
  getPage($('#pageselect').val());
})

$('#pageselect').on('change', function() {
  getPage(this.value);
});

$('#add-cat').on('click', function() {
  $('#add-cat-modal').modal('show');
});

$('#add-page-save').on('click', function() {
  $('#add-cat-modal').modal('hide');
  var name = $('#add-page-name').val();
  var page = $('#add-page-select').val();
  var image = $('#add-page-image').val();
  var link = $('#add-page-link').val();
  console.log(name + page + image + link);
  addCategory(name, page, image, link);
});

function addCategory(name, page, image, link){
  $.ajax({
    type: 'POST',
    url: '../sql/add_menu_page_cat.php',
    data: {name: name, page: page, image: image, link: link},
    success: function(response) {
      var arr = JSON.parse(response);
      if (arr.status == "success"){
        alert("added successfully");
        getPage($('#add-page-select').val());
      } else{
        alert("addition failed");
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


function getPage(page){
  $.ajax({
    type: 'POST',
    url: '../sql/get_menu_page_by_name.php',
    data: {page: page},
    success: function(response) {
      var arr = JSON.parse(response);
      if (arr.status == "fail"){
        alert("Could not access categories");
      } else{
        var arr = JSON.parse(response);
        printPageTable(arr);
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

function printPageTable(arr){
  var out = '';
  for(var i = 0; i < arr.length; i++) {
    out += '<tr class="">' +
            '<th scope="row">' + arr[i].cat_name +'</th>' +
            '<td> <img src="' + arr[i].image_url + '" alt="Card Photo" style="width:70px;height:70px;"> </td>' +
            '<td>' + arr[i].link_url + '</td>' +
            '<td>coming soon</td>' +
            '<td><button type="button" class="btn btn-block btn-danger" onclick=deleteCat(' + arr[i].id + ',"inactive")>Delete</button></td>' +
            //'<td><button type="button" class="btn btn-success" onclick=changeState(' + arr[i].id + ',"inactive")>Change state</button></td>' +
           '</tr>';
  }
  $('#table').html(out);
}

function deleteCat(id){
  $.ajax({
    type: 'POST',
    url: '../sql/delete_page_category.php',
    data: {id: id},
    success: function(response) {
      getPage($('#pageselect').val());
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
