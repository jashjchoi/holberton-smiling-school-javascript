// Task 1 - Create Quotes Carousel
function createQuoteCarousel () {
  $.ajax({
    method: 'GET',
    url: 'https://smileschool-api.hbtn.info/quotes'
  })
    .done(function (data) {
      data.forEach(item => {
        let active = '';
        if (item.id == 1) {
          active = 'active';
        }
        $('#quotesContent').append(
          '<div class="carousel-item ' + active + '">' +
            '<div class="row">' +
              '<div class="col-12 col-md-4 text-center p-auto m-auto">' +
                '<img class="rounded-circle" src="' + item.pic_url + '" alt="Profile 1" width="150" height="150">' +
              '</div>' +
              '<div class="col-12 col-md-8 m-auto pt-3">' +
                '<p class="text-white font-weight-normal">' + item.text + '</p>' +
                '<p class="text-white font-weight-bold">' + item.name + '</p>' +
                '<p class="text-white font-weight-normal ">' + item.title + '</p>' +
              '</div>' +
            '</div>' +
          '</div>'
        );
      });
      $('#loaderQuotes').hide();
      $('#carouselQuote').show();
    });
}
createQuoteCarousel();
