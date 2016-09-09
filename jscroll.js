(function($) {
    $.fn.jScroll = function(e) {
        var f = $.extend({}, $.fn.jScroll.defaults, e);
        return this.each(function() {
            var element = $(this);
            element.initialOffsetTop = element.offset().top;
            function scroll() {
                if ($(window).scrollTop() >= (element.initialOffsetTop - f.top)) {
                    element.offset({top: $(window).scrollTop() + f.top});
                } else {
                    element.offset({top: element.initialOffsetTop});
                }
            };
            $('document').ready(scroll);
            $(window).scroll(scroll);
        });
    };
    $.fn.jScroll.defaults = {
        top: 10
    };
})(jQuery);
