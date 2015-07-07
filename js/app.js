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
      playMusic(artist);
    }
  });

  function playMusic(artist) {
    // console.log('make API call for ' + artist);
    player.cuePlaylist({
      autoplay: 1,
      listType: 'search',
      list: artist
    });
  }

  // change color of music player
  var colorButton = document.getElementById('changeColor');
  var playerBody = document.getElementById('playerbody');
  var innerWheel = document.getElementById('innerWheel');

  $(colorButton).on('click', changeButtonColor);

  function changeButtonColor() {
    var newColor = generateRandomColor();
    playerBody.style.backgroundColor = newColor;
    innerWheel.style.backgroundColor = newColor;
  }
  function generateRandomColor(){
    var newColor = ['pink','blue','orange','yellow','green','purple','red','#5A5A5A'];
    return newColor[Math.floor(Math.random()*newColor.length)];
  }
});//end document.ready
