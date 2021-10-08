$(document).ready(() => {
  $('#popularLoader').show();
  $.get('https://smileschool-api.hbtn.info/popular-tutorials', (data) => {
    $('#popularLoader').hide();
    data.forEach((element, i) =>
      $('#popularCarousel').append(createCarouselItem(element, i))
    );
    startCarousel('#popularCarousel');
  });

  $('#latestLoader').show();
  $.get('https://smileschool-api.hbtn.info/latest-videos', (data) => {
    $('#latestLoader').hide();
    data.forEach((element, i) =>
      $('#latestCarousel').append(createCarouselItem(element, i))
    );
    startCarousel('#latestCarousel');
  });

  const createCarouselItem = (element, i) => {
    return `
        <div class="carousel-item ${i === 0 ? 'active' : ''}">
        ${createCard(element)}
        </div>
      `;
  };

  const createCard = (element, i) => {
    let starPurple = '';
	    const starBlack = '<img src="images/star_off.png" class="review_star"/>'.repeat(5 - element.star);
    for (let i = 0; i < element.star; i++) {
      starPurple += '<img src="images/star_on.png" class="review_star"/>';
	    }
    return `
        <div class="col-12 col-md-6 col-lg-3 card px-2">
          <div class="card-body">
            <img src="${element.thumb_url}" class="card-img-top"/>
            <div class="play-button row justify-content-center">
                <img class="iconsPlay position-absolute" src="./images/play.png" />
            </div>
            <h4 class="card-title my-3 font-weight-bold">${element.title}</h4>
            <p class="card-text reviews text-muted w-75">${element['sub-title']}</p>
            <div class="row align-items-center">
                <div class="col-2">
                  <img src="${element.author_pic_url}" class="rounded-circle" " width="30px" height="30px"/>
                </div>
                <p class="mt-3 ml-4 highlightText reviewer">${element.author}</p>
            </div>
            <div class="row justify-content-between pt-3">
                <div class="col-8">${starPurple}${starBlack}</div> 
                <div class="col px-0">
                  <p class="ptime highlightText text-right">${element.duration}</p>
                </div>
            </div>
          </div>
        </div>`;
  };

  const startCarousel = (carouselId) => {
    $(`${carouselId} .carousel-item`).each(function () {
      const minPerSlide = 4;
      let next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      for (let i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
      }
    });
  };
});
