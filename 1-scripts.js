function displayQuote(name, pic_url, text, title) {
  $('#quote').append(
      `<div class="carousel-item">
          <div class="row text-white my-4 ml-2">
              <div class="d-flex justify-content-center flex-wrap ">
                  <div class="mt-4 col-sm-7 col-md-2 d-flex justify-content-center">
                      <img src="${pic_url}" alt="" class="rounded-circle" width="120" height="120">
                  </div>
                  <div class="m-3 col-sm-6 col-md-7">
                      <p class="paragraph-carousel">${text}</p>
                      <p class="name mt-4 mb-1">${name}</p>
                      <p class="font-italic">${title}</p>
                  </div>
              </div>
          </div>
      </div>`
  )
}

function quotes() {
  $('.loader').show()
  $.ajax({
      type: 'GET',
      url: 'https://smileschool-api.hbtn.info/quotes',
      error: function (error) {
          alert(error)
      },
      success: function (response) {
          response.forEach(({ name, pic_url, text, title }) => {
              displayQuote(name, pic_url, text, title)
          });
          $('.carousel .carousel-item:first').addClass('active')
          $('.loader').hide()
      }
  })
}
quotes();
