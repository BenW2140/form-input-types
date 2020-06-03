$(document).ready(function() {
  $("form#name").submit(function(event) {
    event.preventDefault();
    const name = $("#name1").val();
    const food = $("#food1").val();
    const music = $("input:radio[name=music]:checked").val();
    $("#output").text(name);
  });
});