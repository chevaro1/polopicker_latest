

getData();


function getData(){
    var xmlhttp = new XMLHttpRequest();
    var url = "../sql/get_websites.php";
    //var param = "?cat=" + product;

    console.log("get data script running");

    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        printData(myArr);
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function printData(arr){
  console.log("myFunction called");
  var out = "";
  var i;
  for(i = 0; i < arr.length; i++) {
    if(arr[i].state === "active"){
      out += '<tr class="table-success">' +
              '<th scope="row">' + arr[i].name +'</th>' +
              '<td>N/a</td>' +
              '<td>' + arr[i].state + '</td>' +
              '<td><button type="button" class="btn btn-success" onclick=changeState(' + arr[i].id + ',"inactive")>Change state</button></td>' +
             '</tr>';
    } else {
      out += '<tr class="table-danger">' +
              '<th scope="row">' + arr[i].name +'</th>' +
              '<td>N/a</td>' +
              '<td>' + arr[i].state + '</td>' +
              '<td><button type="button" class="btn btn-danger" onclick=changeState(' + arr[i].id + ',"active")>Change state</button></td>' +
             '</tr>';
    }

  }
  document.getElementById("table").innerHTML = out;
}




function changeState(id, state){
  console.log("change state has been called");
  //alert("state = " + state + " id = " + id);

  var xmlhttp = new XMLHttpRequest();
  var url = "../sql/toggle_websites.php";
  var param = "?id=" + id + "&state=" + state;

  console.log("changing state");

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert("change complete!");
      getData();
    }
  };
  xmlhttp.open("GET", url+param, true);
  xmlhttp.send();
}
