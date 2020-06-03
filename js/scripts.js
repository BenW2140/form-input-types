$(document).ready(function() {
  $("form#name").submit(function(event) {
    event.preventDefault();
    const name = $("#name1").val();
    const food = $("#food1").val();
    const music = $("input:radio[name=music]:checked").val();
    const dob = $("#born").val();
    $("#output").text(name);
  });

  $("form#name").submit(function(event) {
    event.preventDefault();
    const input = $("#name1").val();
    console.log(input)
    $("#output").text(input);
  });

});
 

 