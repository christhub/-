var typeTriangle = function(side1, side2, side3) {
  if ((side1 === side3) && (side2 === side1)) {
    return "an Equilateral"
  } else if  ((side1 === side2) || (side2 === side3) || (side1 === side3)) {
    return "an Isosclese"
  } else {
    return "a Scalene"
  }
};

$(document).ready(function() {

  $("form#sides").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var result = typeTriangle(side1, side2, side3);

    $(".typeTriangle").text(result);

    $("#result").show();
    event.preventDefault();

  });

  // $("form#leap-year").submit(function(event) {
  //   var year = parseInt($("input#year").val());
  //   var result = leapYear(year);
  //
  //   $(".year").text(year);
  //   if (!result) {
  //     $(".not").text("not");
  //   }
  //
  //   $("#result").show();
  //   event.preventDefault();
  // });
});
