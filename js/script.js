var images = [];
var turns = 0;

function compare(images) {
  if (images.length === 2) {
    if (images[0] === images[1]) {
      return true;
    } else {
      return false;
    }
  }
}

// var counter = function(images) {
//   for (i=0; i <= images.length; i++) {
//     clicks += 1;
//   } return clicks;
// }

function counter(images) {
  images.forEach(function(image) {
    turns += 1;
  });
  return turns;
}



$(document).ready(function() {

  $(".card").click(function() {
    $("img", this).addClass("selected").show();
    images.push(parseInt(this.id));

    var result = compare(images);

      if (result === false) {
        $(".selected").fadeToggle(1000);
        $("img").removeClass("selected");
        images = [];
      } else if (result === true){
        $("img").removeClass("selected");
        images = [];
      }
      var output = counter(images);
      $(".output").text(output);
      // console.log(counter(images));

  });
});
