getData();




function getData(){
    var xmlhttp = new XMLHttpRequest();
    var url = "../sql/admin_count_website.php";
    //var param = "?cat=" + product;

    console.log("get data script running");

    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        barChart(myArr);
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


function barChart(arr){

  var website = [];
  var total = [];
  var colours = []

  for(i = 0; i < arr.length; i++) {
    console.log("website = " + arr[i].website);
    console.log("total = " + arr[i].total);
    website.push(arr[i].website);
    total.push(arr[i].total);
    colours.push(dynamicColors());
  }

  var ctx = $("#myChart");

  var barGraph = new Chart(ctx,{
    type: 'horizontalBar',
    data: {
      labels: website,
      datasets: [{
        data: total,
        label: "products",
        lineTension: 0,
        backgroundColor: colours,
        //borderColor: 'green',
        borderWidth: 1,
        pointBackgroundColor: 'green'
      }]
    },
  });
}

var dynamicColors = function() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return "rgb(" + r + "," + g + "," + b + ")";
}
