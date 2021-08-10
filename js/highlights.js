getData();


function getData(){
  getProducts();

  getSites();

  getCats();

  getErrors();

  getUnknown();
}

function getProducts(){
  var xmlhttp = new XMLHttpRequest();
  var url = "../sql/admin_get_products.php";
  //var param = "?cat=" + product;

  console.log("get data script running");

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      printData("products", myArr[0].total);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}


function getSites(){
  var xmlhttp = new XMLHttpRequest();
  var url = "../sql/admin_get_total_sites_live.php";
  //var param = "?cat=" + product;

  console.log("get data script running");

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      printData("sites", myArr[0].total);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function getCats(){
  var xmlhttp = new XMLHttpRequest();
  var url = "../sql/admin_get_categorys.php";
  //var param = "?cat=" + product;

  console.log("get data script running");

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      printData("cats", myArr[0].total);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function getErrors(){
  var xmlhttp = new XMLHttpRequest();
  var url = "../sql/admin_get_errors.php";
  //var param = "?cat=" + product;

  console.log("get data script running");

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      printData("errors", myArr[0].total);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function printData(id, val){
  document.getElementById(id).innerHTML = val;
}

function getUnknown(){
  var xmlhttp = new XMLHttpRequest();
  var url = "../sql/admin_get_unknown.php";
  //var param = "?cat=" + product;

  console.log("get data script running");

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      printData("unknown", myArr[0].total);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
