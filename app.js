// Iteration 0
$(document).ready(function() {
  console.log("The document is ready!");
  var homeValues = [1000000000, 350000, 20];
  var homeStrings = ["$1,000,000,000", "$350,000", "$20"];
  var homeImages = ["img/whiteHouse.jpg", "img/newShack.jpg", "img/shack.jpg"];

  for (var i = 0; i < 3; i++) {
    var $newHome = $('.home').first().clone().appendTo('.image-container');

    $newHome.attr("data-price", homeValues[i]);
    $newHome.find("h4").text(homeStrings[i]);
    $newHome.find("img").attr("src", homeImages[i]);
  }

  $('.dark').on('click', function() {
    $('body').css('background', 'url(img/dark_wood.png)');
  });

  $('.light').on('click', function() {
    $('body').css('background', 'url(img/tileable_wood_texture.png)');
  });

  $('.textures').css('width', '150px');
  $('.textures').append("<span class='forest'></span");
  $('.forest').css('background', 'url(img/forest.jpg)');

  $('.forest').on('click', function() {
    $('body').css({
      'background-size' : 'cover',
      'background' : 'url(img/forest.jpg)'
    });
  });

// Iteration 1
  $('.high').on('click', function(event) {
    event.preventDefault();
    $('.image-container').html($('.image-container').children().sort(function(a, b) {
      return b.dataset.price - a.dataset.price;
    }));
  });

  $('.low').on('click', function(event) {
    event.preventDefault();
    $('.image-container').html($('.image-container').children().sort(function(a, b) {
      return a.dataset.price - b.dataset.price;
    }));
  });

// Iteration 2

  //+$('input:checked').val() = number value of checked
  $('input').change(function() {
    var $article = $('article');

    if ($(this).is(':checked')) {
        var $checkedLow = Number($('input:checked').parent().prev().children().val());
        var $checkedHigh = Number($('input:checked').val());
        $article.hide();

        //if previous child's value is NaN, set the value to zero.
        if (isNaN($checkedLow)) {
          $checkedLow = 0;
        }

        for (var i = 0; i < $article.length; i++) {
          if (Number($article[i].dataset.price) <= $checkedHigh && Number($article[i].dataset.price >= $checkedLow)) {
            $article.eq(i).show();
          }
        }
    } else if ($('input').not(':checked')){
        $article.show();
    }
  });
});

