$(document).ready(function() {


function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}
$('#doorbell-ring').on('click',function() {
  ringDoorbell();
})
$(document).on('keypress', function(event) {
  if (event.key == "d") {
    ringDoorbell();
  }
});
