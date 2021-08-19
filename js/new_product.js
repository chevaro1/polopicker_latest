


$(".filter-option").click(function(){
  //log(this);
  $(this).find('span.rotate').toggleClass("ninty");
})

$("#close-mobile-filter").click(function(){
  document.getElementById("filter-options").style.height = "0";
  document.removeEventListener('click', insideMenu);
})

function openNav() {
  console.log("Open Nav called");
  document.getElementById("filter-options").style.height = "60vh";

  setTimeout(() => {document.addEventListener('click', insideMenu); }, 500);

}

/*
const target = document.querySelector('#filter-options')

document.addEventListener('click', (event) => {
  const withinBoundaries = event.composedPath().includes(target)

  if (withinBoundaries) {
    console.log('clicked inside menu');
  } else {
    console.log('clicked outside menu');
    console.log(document.getElementById("filter-options").style.height);
    if (document.getElementById("filter-options").style.height == "60vh") {
        //document.getElementById("filter-options").style.height = "0";
    }
  }
})
*/


const target = document.querySelector('#filter-options');

function insideMenu(event) {
  const withinBoundaries = event.composedPath().includes(target)

  if (!withinBoundaries) {
    if (document.getElementById("filter-options").style.height == "60vh") {
        document.getElementById("filter-options").style.height = "0";
        document.removeEventListener('click', insideMenu);
    }
  }
}
