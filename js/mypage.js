$(document).ready(function(){

    // body 스크롤 막음
    function scrollOff() {
        $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function (e) {
            e.stopPropagation();
        });
    };
    // body 스크롤 풀기
    function scrollOn() {
        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
    };

    // 회원탈퇴 모달
    $('.withdrawal_btn').click(function(){
        $('.withdrawalC_modal').fadeIn(200);
        scrollOff();
    });

    // 개인정보수정 모달
    $('.info_change.mypage .edit_btn').click(function(){
        $('.infoModify_modal').fadeIn(200);
        scrollOff();
    });

    // 통합회원 전환 중복확인 모달
    $('.membership.check .btn_apply').click(function(){
        $('.overlapC_modal').fadeIn(200);
        scrollOff();
    });

    // 음원 메일 재발송 모달
    $('.resend_mail').click(function(){
        $('.soundSend_modal').fadeIn(200);
        scrollOff();
    });
    
    // 프로필수정 모달
    $('.profile_manage .edit_btn').click(function(){
        $('.profileModify_modal').fadeIn(200);
        scrollOff();
    });

    // 추천인 url 복사 모달
    $('.urlCopy_btn').click(function(){
        $('.copy_modal').fadeIn(200);
        scrollOff();
    });

    // 코드 복사 모달
    $('.codeCopy_btn').click(function(){
        $('.codeCopy_modal').fadeIn(200);
        scrollOff();
    });

    // 이용약관 모달
    $('.term_btn').click(function(){
        $('.terms_modal').fadeIn(200);
        scrollOff();
    });

    // 개인정보처리방침 모달
    $('.policy_btn').click(function(){
        $('.policy_modal').fadeIn(200);
        scrollOff();
    });
});