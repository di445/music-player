$(document).ready(function() {
  //make images draggable
  var images = $(".photos img");
  $.each(images, function(idx, image) {
    $(image).draggable({
      revert: true
    });
  });
  //add drop event to music player
  var musicPlayer = document.getElementById("display");
  $(musicPlayer).droppable({
    drop: function(event, ui) {
      //ui is the image being dropped on the music player
      var image = ui.draggable[0];
      var imageURL = image.getAttribute('src');
      var artist = image.id.split("-").join(" ");
      $(this).css('background-image', 'url(' + imageURL + ')');
      $(this).css('background-size', '100% 100%');
      console.log(this.style);
      playMusic(artist);
    }
  });

  function playMusic(artist) {
    console.log('make API call for ' + artist);
  }

  //functions from youTube API to insert iframes

});
