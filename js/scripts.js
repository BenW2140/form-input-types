$(document).ready(function() {
  $("form#name").submit(function(event) {
    event.preventDefault();
    const name = $("#name1").val();
    const food = $("#food1").val();
    const music = $("input:radio[name=music]:checked").val();
    const dob = $("#born").val();
    const favoriteColor = $("#color").val();
  });

//   $("form#name").submit(function(event) {
//     event.preventDefault();
//     const input = $("#name1").val();
//     console.log(input)
//     $("#output").text(input);
//   });

// });
 

// $("form#subtract").submit(function(event) {
//   event.preventDefault();
//   const number1 = $("#subtract1").val();
//   console.log(number1)
//   $("#output").text(number1);
// });