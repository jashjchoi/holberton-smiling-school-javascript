$(document).ready(function () {
  function quotes () {
    $('.loader').show();
    $.ajax({
      type: 'GET',
      url: 'https://smileschool-api.hbtn.info/quotes',
      error: function (error) {
        alert(error);
      },
      success: function (response) {
        response.forEach(({ name, pic_url, text, title }) => {
          displayQuote(name, pic_url, text, title);
        });
        $('.carousel .carousel-item:first').addClass('active');
        $('.loader').hide();
      }
    });
  }

  function displayQuote (name, pic_url, text, title) {
    $('#quote').append(
          `<div class="carousel-item">
              <div class="row text-white my-4 ml-2">
                  <div class="d-flex justify-content-center flex-wrap m-auto">
                      <div class="mx-0 px-0 mt-2 col col-md-4 d-flex justify-content-center">
                          <img src="${pic_url}"  class="rounded-circle" width="150" height="150">
                      </div>
                      <div class="m-3 col-sm-6 col-md-6">
                          <p class="font-weight-light pr-4">${text}</p>
                          <p class="font-weight-bold mt-4">${name}</p>
                          <p class="font-italic">${title}</p>
                      </div>
                  </div>
              </div>
          </div>`
    );
  }
  quotes();
});