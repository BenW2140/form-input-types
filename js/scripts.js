$(document).ready(function() {
  $("form#name").submit(function(event) {
    event.preventDefault();
    const name = $("#name1").val();
    $("#output").text(name);
  });
});