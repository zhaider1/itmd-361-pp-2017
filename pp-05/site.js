$(document).ready(function() {


function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}
$('#doorbell-ring').on('click',function() {
  ringDoorbell();
})
