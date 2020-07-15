/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */


function openNav() {
  document.getElementById("mySidenav").style.width = "33%";
  document.getElementById("main").style.marginRight = "33%";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  // if (window.innerWidth >= 768) {
  //   return true;
  // }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
  document.body.style.backgroundColor = "white";

  // if (window.innerWidth >= 768) {
  //   return false;
  // }

}