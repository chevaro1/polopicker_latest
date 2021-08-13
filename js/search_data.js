var timeframe = parseInt($('#search-timeframe :selected').val());
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
  getRecentSearches();
})


$('#search-timeframe').on('change', function() {
  timeframe = parseInt(this.value);
  getData();
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                       the following functions handle getting the search data and printing it
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


function getData(){
  $.ajax({
    type: 'POST',
    url: '../sql/get_search_data.php',
    data: {timeframe: timeframe},
    success: function(response) {
      var arr = JSON.parse(response);
      if (arr.status == "fail"){
        throwInvalidError("Error Getting Staff", arr.message);
      } else{
        var arr = JSON.parse(response);
        printSearchData(arr);
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                           the following functions handle getting the recent searches and printing them
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


function printSearchData(arr){
  $('#total-searches').html(arr.total);
  $('#average-searches').html(arr.average);

  var out = "";
  for(var i = 0; i < arr.popular.length; i++) {
    out += "<tr>";
    out += "<td>" + arr.popular[i].search_term + "</td>";
    out += "<td>" + arr.popular[i].total + "</td>";
    out += "<tr>";

  }
  out += '</div>'
  $('#popular-search-table').html(out);
}

function getRecentSearches(){
  $.ajax({
    type: 'POST',
    url: '../sql/get_recent_searches.php',
    data: {timeframe: timeframe},
    success: function(response) {
      var arr = JSON.parse(response);
      if (arr.status == "fail"){
        throwInvalidError("Error Getting Staff", arr.message);
      } else{
        var arr = JSON.parse(response);
        printRecentSearches(arr);
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

function printRecentSearches(arr){
  var out = "";
  for(var i = 0; i < arr.length; i++) {
    out += "<tr>";
    out += "<td>" + arr[i].search_term + "</td>";
    out += "<td>" + arr[i].timestamp + "</td>";
    out += "<tr>";

  }
  out += '</div>'
  $('#recent-searches').html(out);
}
