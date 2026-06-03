// Get the modal
var modal = document.getElementById("myModal");

// When the user clicks on the button, open the modal
window.onload = function openModal() {
  modal.style.display = "block";

}



window.onclick = function(event) {

    modal.style.display = "none";
    console.log('mouseclick');
  }
