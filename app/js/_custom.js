$(document).ready(function () {
    var preloader = $('.preloader'),
        end = $('.end'),
        pw = preloader.width(),
        percent = preloader.find('.percent'),
        circle = preloader.find('.circle'),
        l = 3, j = 0;

    var timer = setInterval(function () {
        var p = parseInt((100 / l) * j),
            w = (150 * p) / 100;

        for (i = 0; i < 15; i++) {
            preloader.append($('<span />'));
        }

        var span = preloader.find('span');

        span.each(function () {
            var t = $(this),
                x = random(-250, 250),
                y = random(-250, 250),
                d = random(10, 20),
                css = {
                    top: y,
                    left: x,
                    width: d,
                    height: d,
                    '-moz-border-radius': d,
                    '-webkit-border-radius': d,
                    'border-radius': d,
                    opacity: .7
                },
                animation = {
                    top: pw / 2 - d / 2,
                    left: pw / 2 - d / 2,
                    opacity: 0
                }

            t.css(css).stop(true, true).animate(animation, 900, 'easeInBack', function () {
                t.remove();
                var css = {
                    opacity: p / 100
                }
                circle.css(css);
            });

        });

        percent.text(p + '%')

        if (p > 99) {
            clearInterval(timer);
            setTimeout(function () {
                preloader.fadeOut(400);
                $('.section_preloader').fadeOut(400);
                end.fadeIn();
            }, 1500);
        }
        j++;
    }, 1000);

    function random(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }
    setTimeout(function () {
        $('.effect').mouseenter(function () {
            var classes = $(this).attr('class');
            $(this).attr('class', 'animate');
            var indicator = $(this);
            setTimeout(function () {
                $(indicator).addClass(classes);
            }, 20);
        });
    }, 5000);


    $(".down_block").on("click", function () {
        $h = $(window).height();
        $("body,html").animate({scrollTop: $h}, 800)

    });


    $('.down_block').hover(
        function () {
            $(this).find('.deh').addClass('active');
        },
        function () {
            $(this).find('.deh').removeClass('active');
        }
    );

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

setTimeout(function () {
    $('.b03_skewed_slide_in').addClass('active');
}, 8500);

$('.b03_skewed_slide_in').hover(
    function () {
        $(this).removeClass('active');
    }
);

var rellax = new Rellax('.rellax');

window.setInterval(function () {
    $(".assets_item").removeClass('active')
    var len = 10;
    var random = Math.floor(Math.random() * len) + 1;
    $(".assets_item").eq(random).addClass('active');
}, 1000);

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


//стирание текста
var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #ffffff}";
    document.body.appendChild(css);
    trackMouse('.hoverable', '.js-pointer');
};


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

    (function hoverable() {
        $hover.forEach(function (item) {
            item.addEventListener('mouseover', function () {
                $pointer.classList.add('hide');
            });
            item.addEventListener('mouseout', function () {
                $pointer.classList.remove('hide');
            });
        })
    })();

}

