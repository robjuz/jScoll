/**
 * Created by robjuz on 09.09.16.
 */
(function ($) {
    $.fn.jScroll = function (e) {
        var f = $.extend({}, $.fn.jScroll.defaults, e);
        return this.each(function () {
            var element = $(this);
            element.initialOffsetTop = element.offset().top;
            function scroll() {
                if (($(window).scrollTop() >= (element.initialOffsetTop - f.top)) &&
                    ($(window).width() >= f.min_width)) {
                    element.stop().animate({'margin-top':$(window).scrollTop()-element.initialOffsetTop + f.top});
                } else {
                    element.stop().animate({'margin-top':0});
                }
            };
            $('document').ready(scroll);
            $(window).scroll(scroll);
        });
    };
    $.fn.jScroll.defaults = {
        top: 10,
        min_width: 768
    };
})(jQuery);
