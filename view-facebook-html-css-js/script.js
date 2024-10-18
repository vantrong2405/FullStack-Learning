

// var seeMore = document.querySelector('.see-more');
var contentShortCut = "";
var contentSlide = "";
var contentPoster = "";
var contentAdvertisement = "";
var contentContact = "";

$(shortcut_page).each(function (key, value) {
    contentShortCut = contentShortCut + '<a href="#" class="text-decoration-none text-dark">';
    contentShortCut = contentShortCut + ' <div class=" mt-2 mb-2 categorys">';
    contentShortCut = contentShortCut + '<div class="d-flex align-items-center category rounded py-2" style="width: 100%;">';
    contentShortCut = contentShortCut + '<img class="ms-2" src="' + value.hinh_anh + '" width="8%" alt="">';
    contentShortCut = contentShortCut + '<span class="ms-3"><b>' + value.tieu_de_trang + '</b></span>';
    contentShortCut = contentShortCut + '</div>';
    contentShortCut = contentShortCut + '</div>';
    contentShortCut = contentShortCut + '</a>';
});

$(slides).each(function (key, value) {
    contentSlide = contentSlide + '<swiper-slide>';
    contentSlide = contentSlide + ' <a href="#">';
    contentSlide = contentSlide + '<img src="' + value.hinh_anh + '"';
    contentSlide = contentSlide + 'width="100%" height="100%" class="rounded-3" alt="...">';
    contentSlide = contentSlide + '</a>';
    contentSlide = contentSlide + '</swiper-slide>';
});

$(data).each(function (key, value) {
    contentPoster = contentPoster + '<div class="card mb-4">';
    contentPoster = contentPoster + '<div class="card-body">';
    contentPoster = contentPoster + '<div class="row">';
    contentPoster = contentPoster + '<div class="col-md-8 ">';
    contentPoster = contentPoster + '<div class="d-flex">';
    contentPoster = contentPoster + ' <div class="rounded-circle mandates py-2 px-3 align-middle me-2 ms-0" style="background-color: rgb(228,230,235); width: 38px; height: 38px; position: relative; overflow: hidden;">';
    contentPoster = contentPoster + '<img style="position: absolute; left: 0; top:0; scale: 1.2;  object-fit: contain;" src="' + value.avatar + '" alt="" width="100%" height="100%">';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + '</a>';
    contentPoster = contentPoster + '<div class="title">';
    contentPoster = contentPoster + '<div class="title-head">';
    contentPoster = contentPoster + ' <b><a href="" class="text-decoration-none text-dark">' + value.firstname + " " + '';
    contentPoster = contentPoster + ' ' + value.lastname + '</a></b>';
    contentPoster = contentPoster + ' </div>';
    contentPoster = contentPoster + '<div class="title-date d-flex align-items-center">';
    contentPoster = contentPoster + '<p class="m-0 me-2"><a href=""';
    contentPoster = contentPoster + 'class="text-decoration-none text-dark">5 ';
    contentPoster = contentPoster + 'tháng 10 lúc 20:00</a></p>';
    contentPoster = contentPoster + ' <a href="" class="text-decoration-none text-dark">';
    contentPoster = contentPoster + '<svg fill="currentColor" viewBox="0 0 16 16" width="1em"';
    contentPoster = contentPoster + ' height="1em"';
    contentPoster = contentPoster + ' class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1kpxq89 xsmyaan"';
    contentPoster = contentPoster + ' title="Đã chia sẻ với Công khai">';
    contentPoster = contentPoster + '<title>Đã chia sẻ với Công khai</title>';
    contentPoster = contentPoster + ' <g fill-rule="evenodd" transform="translate(-448 -544)">';
    contentPoster = contentPoster + ' <g>';
    contentPoster = contentPoster + ' <path';
    contentPoster = contentPoster + ' d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"';
    contentPoster = contentPoster + 'transform="translate(354 143.5)"></path>';
    contentPoster = contentPoster + '<path';
    contentPoster = contentPoster + ' d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"';
    contentPoster = contentPoster + ' transform="translate(354 143.5)"></path>';
    contentPoster = contentPoster + ' <path fill-rule="nonzero"';
    contentPoster = contentPoster + 'd="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"';
    contentPoster = contentPoster + ' transform="translate(354 143.5)"></path>';
    contentPoster = contentPoster + ' </g>';
    contentPoster = contentPoster + ' </g>';
    contentPoster = contentPoster + '</svg>';
    contentPoster = contentPoster + '</a>';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + ' <div class="col-md-4 fs-3 d-flex align-items-center justify-content-end">';
    contentPoster = contentPoster + '<a href="" class="text-decoration-none text-dark">';
    contentPoster = contentPoster + '<svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"';
    contentPoster = contentPoster + 'class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1qx5ct2 xw4jnvo">';
    contentPoster = contentPoster + ' <g fill-rule="evenodd" transform="translate(-446 -350)">';
    contentPoster = contentPoster + ' <path';
    contentPoster = contentPoster + ' d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0">';
    contentPoster = contentPoster + ' </path>';
    contentPoster = contentPoster + '  </g>';
    contentPoster = contentPoster + ' </svg>';
    contentPoster = contentPoster + '</a>';
    contentPoster = contentPoster + '<a href="" class="text-decoration-none text-dark">';
    contentPoster = contentPoster + ' <i class="fa-solid fa-xmark ms-3"></i>';
    contentPoster = contentPoster + ' </a>';
    contentPoster = contentPoster + ' </div>';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + '<div class="row">';
    contentPoster = contentPoster + '<div class="descripton my-1">';
    contentPoster = contentPoster + '<p class="m-0">' + value.about + '</p>';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + '<div style="height: 600px;">';
    contentPoster = contentPoster + '<img src="' + value.images + '"';
    contentPoster = contentPoster + 'alt="" width="100%" height="100%" style="background-size: 100% 100%; object-fit: cover;">';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + '';
    contentPoster = contentPoster + '';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + '<div class="row mt-3">';
    contentPoster = contentPoster + ' <div class="col-md-6">';
    contentPoster = contentPoster + ' <a href=""';
    contentPoster = contentPoster + ' class="text-decoration-none text-dark d-flex align-items-center fs-5">';
    contentPoster = contentPoster + '<i class="fa-solid fa-thumbs-up fa-1x text-primary"></i>';
    contentPoster = contentPoster + ' <p class="m-0 ms-2">' + value.like + '</p>';
    contentPoster = contentPoster + '  </a>';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + ' <div class="col-md-6 text-end">';
    contentPoster = contentPoster + '  <div class="row">';
    contentPoster = contentPoster + '<div class="col-md-12 d-flex align-items-center justify-content-end">';
    contentPoster = contentPoster + ' <div class="d-flex align-items-center me-4 fs-5">';
    contentPoster = contentPoster + ' <p class="m-0 me-2 fs-6">' + value.comment + '</p>';
    contentPoster = contentPoster + '<i class="fa-solid fa-comment"></i>';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + ' <div class="d-flex align-items-center fs-5">';
    contentPoster = contentPoster + ' <p class="m-0 me-2 fs-6">' + value.share + '</p>';
    contentPoster = contentPoster + '<i class="fa-solid fa-share"></i>';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + ' </div>';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + '</div>';
    contentPoster = contentPoster + ' <hr>';
    contentPoster = contentPoster + '<div class="row">';
    contentPoster = contentPoster + '<div class="col-md-4">';
    contentPoster = contentPoster + '<a href=""';
    contentPoster = contentPoster + ' class="text-decoration-none text-dark d-flex align-items-center justify-content-center fs-5">';
    contentPoster = contentPoster + ' <i class="fa-regular fa-thumbs-up"></i>';
    contentPoster = contentPoster + ' <p class="m-0 ms-2">Thích</p>';
    contentPoster = contentPoster + '</a>';
    contentPoster = contentPoster + ' </div>';
    contentPoster = contentPoster + '  <div class="col-md-4">';
    contentPoster = contentPoster + '<a href=""';
    contentPoster = contentPoster + 'class="text-decoration-none text-dark d-flex align-items-center justify-content-center fs-5">';
    contentPoster = contentPoster + '<i class="fa-regular fa-comment"></i>';
    contentPoster = contentPoster + ' <p class="m-0 ms-2">Bình luận</p>';
    contentPoster = contentPoster + ' </a>';
    contentPoster = contentPoster + ' </div>';
    contentPoster = contentPoster + ' <div class="col-md-4">';
    contentPoster = contentPoster + '  <a href=""';
    contentPoster = contentPoster + ' class="text-decoration-none text-dark d-flex align-items-center justify-content-center fs-5">';
    contentPoster = contentPoster + ' <i class="fa-solid fa-share"></i>';
    contentPoster = contentPoster + '  <p class="m-0 ms-2">Chia sẽ</p>';
    contentPoster = contentPoster + '  </a>';
    contentPoster = contentPoster + ' </div>';
    contentPoster = contentPoster + ' </div>';
    contentPoster = contentPoster + ' </div>';
    contentPoster = contentPoster + ' </div>';
});

$(advertisement).each(function (key, value) {
    contentAdvertisement = contentAdvertisement + '<div class="advertisement mb-2">';
    contentAdvertisement = contentAdvertisement + '<a href="" class="d-flex align-items-center text-decoration-none text-dark">';
    contentAdvertisement = contentAdvertisement + '<img src="' + value.advertisement_img + '" alt="" style="width: 20%">';
    contentAdvertisement = contentAdvertisement + '<div class="fs-6 ms-3">';
    contentAdvertisement = contentAdvertisement + '<b>' + value.advertisement_content + '</b>';
    contentAdvertisement = contentAdvertisement + '<div class="link-website fw-medium text-secondary">' + value.advertisement_link + '</div>';
    contentAdvertisement = contentAdvertisement + '  </div>';
    contentAdvertisement = contentAdvertisement + '</a>';
    contentAdvertisement = contentAdvertisement + '</div>';
});

$(contacts).each(function (key, value) {
    contentContact = contentContact + '<a href="#" class="text-decoration-none text-dark">';
    contentContact = contentContact + '<div class="d-flex align-items-center category rounded py-2" style="width: 100%;">';
    contentContact = contentContact + '<div class="rounded-circle mandates py-2 px-3 align-middle me-2 ms-2 border"';
    contentContact = contentContact + 'style="background-color: rgb(228,230,235); width: 38px; height: 38px; position: relative; overflow: hidden;">';
    contentContact = contentContact + '<img style="position: absolute; left: 0; top:0; scale: 1.2;"';
    contentContact = contentContact + 'src="'+value.hinh_anh+'" alt="" width="100%" height="100%">';
    contentContact = contentContact + ' </div>';
    contentContact = contentContact + ' <span><b>'+value.name+'</b></span>';
    contentContact = contentContact + ' </div>';
    contentContact = contentContact + '</a>';

});



$('#shortcut').html(contentShortCut);
$('.mySwipe').html(contentSlide);
$('.posterContent').html(contentPoster);
$('.quang-cao').html(contentAdvertisement);
$('.contact').html(contentContact);


