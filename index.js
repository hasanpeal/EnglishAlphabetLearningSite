$("img").click(function () {
  var className = $(this).attr("class");
  var secondClass = className.slice(6, 12);
  $("." + secondClass)
    .slideUp().slideDown();
  var slicedName = className.slice(11, 12);
  var audio = new Audio("./assets/sounds/" + slicedName + ".wav");
  audio.play();
});
