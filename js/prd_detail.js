$(function () {
    // 제품 이미지 슬라이드
    var swiper = new Swiper(".prd_slide_small", {
        slidesPerView: "auto",
    });
    var swiper = new Swiper(".prd_slide_big", {
        thumbs: {
            swiper: swiper
        }
    });
});