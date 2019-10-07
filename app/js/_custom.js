$(document).ready(function () {
    new WOW().init();
    $(".xs_menu").on('click', function () {
        $(this).find(".hambergerIcon").toggleClass("open");
        $('ul.menu_list').toggleClass('active')
    });

    $('#ckLine').ckLine({
        leftRight: false,
        strokeColor: 'rgba(26,203,253,.5)',
        interval: 800,
        animateTime: 1600,
        animationTimeRange: [800, 1600]
    });

    $('li.item_info').click(function () {
        $('li.item_info').removeClass('active');
        $(this).addClass('active');
        var title = $(this).text();
        var text = $(this).data("text");
        var img = $(this).data("img");
        $('.title_deposit').text(title);
        $('.text_deposit span').text(text);
        $('.right_deposit img').attr('src', img);
    });

    $('p.main_language').click(function () {
        $('ul.list_language').slideToggle();
    });
    animateDiv1();
    animateDiv2();
    animateDiv3();
    animateDiv4();
    animateDiv5();
    animateDiv6();
});
$(window).scroll(function () {
    0 != $(this).scrollTop() ? $("#toTop").fadeIn() : $("#toTop").fadeOut()
}), $("#toTop").click(function () {
    $("body,html").animate({scrollTop: 0}, 800)
});


function makeNewPosition1() {
    var h = $('.info_section').height() - 50;
    var w = $('.info_section').width() - 50;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return [nh, nw];
}
for (var i = 1; i < 7; i++) {
    function animateDiv1() {
        var newq = makeNewPosition1();
        $('.img_info-animate1').animate({top: newq[0], left: newq[1]}, 9000, function () {
            animateDiv1();
        });
    };
}
function animateDiv2() {
    var newq = makeNewPosition1();
    $('.img_info-animate2').animate({top: newq[0], left: newq[1]}, 6000, function () {
        animateDiv2();
    });
};
function animateDiv3() {
    var newq = makeNewPosition1();
    $('.img_info-animate3').animate({top: newq[0], left: newq[1]}, 8000, function () {
        animateDiv3();
    });
};

function animateDiv4() {
    var newq = makeNewPosition1();
    $('.img_info-animate4').animate({top: newq[0], left: newq[1]}, 6000, function () {
        animateDiv4();
    });
};

function animateDiv5() {
    var newq = makeNewPosition1();
    $('.img_info-animate5').animate({top: newq[0], left: newq[1]}, 9000, function () {
        animateDiv5();
    });
};

function animateDiv6() {
    var newq = makeNewPosition1();
    $('.img_info-animate6').animate({top: newq[0], left: newq[1]}, 10000, function () {
        animateDiv6();
    });
};

window.onload = function(){
    trackMouse('.hoverable', '.js-pointer');
}

function trackMouse(hover, pointer) {

    var $hover = document.querySelectorAll(hover);
    var $pointer = document.querySelector(pointer);

    var off = 50;
    var first = !0;

    function mouseX(evt) {
        if (!evt) evt = window.event;
        if (evt.pageX) return evt.pageX;
        else if (evt.clientX) return evt.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
        else return 0
    }

    function mouseY(evt) {
        if (!evt) evt = window.event;
        if (evt.pageY) return evt.pageY;
        else if (evt.clientY) return evt.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
        else return 0
    }

    function follow(evt) {

        if (first) {
            first = !1;
            $pointer.style.opacity = 1;
        }

        TweenMax.to($pointer, .7, {
            left: (parseInt(mouseX(evt)) - off) + 'px',
            top: (parseInt(mouseY(evt)) - off) + 'px',
            ease: Power3.easeOut
        });
    }
    document.onmousemove = follow;

    (function hoverable(){
        $hover.forEach(function(item){
            item.addEventListener('mouseover', function(){
                $pointer.classList.add('hide');
            });
            item.addEventListener('mouseout', function(){
                $pointer.classList.remove('hide');
            });
        })
    })();

}


