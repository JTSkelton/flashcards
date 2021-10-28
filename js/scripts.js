$(document).ready(function() {
  $(".card-body").click(function() {
    $(".card-title", this).toggle();
    $(".card-definition", this).toggle();
  });
});