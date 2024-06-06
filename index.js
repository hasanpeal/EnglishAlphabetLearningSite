$("img").on("click", function () {
  var className = $(this).attr("class");
  var secondClass = className.slice(6, 12);
  $("." + secondClass)
    .slideUp()
    .slideDown();
  var slicedName = className.slice(11, 12);
  var audio = new Audio("./assets/sounds/" + slicedName + ".wav");
  audio.play();
});

$(document).on("keydown", function (event) {
  var letter = event.key.toUpperCase();
  var targetClass = "image" + letter;
  $("." + targetClass)
    .slideUp()
    .slideDown();
  var audio = new Audio("./assets/sounds/" + letter + ".wav");
  audio.play();
});
