(function ($) {
    'use strict';
    $.fn.masonryFilter = function (options) {
        var reload = function ($container) {
            setTimeout(function () {
                $container.masonry("layout");
            }, 100);
        };

        var process = function ($container) {
            var items = $container.masonry("getAllItems"),
                revealItems = [],
                hideItems = [];

            $.each(items, function(i) {
                var item = items[i];
                var elm = $(item.element),
                    shouldShow = options.filter && options.filter.call(elm);

                if (shouldShow) {
                    if (item.isHidden) {
                        item.isIgnored = false;
                        revealItems.push(item);
                    }
                } else {
                    if (!item.isHidden) {                        
                        item.isIgnored = true;
                        hideItems.push(item);
                    }
                }
            });

            $container.masonry('hide', hideItems);
            $container.masonry('reveal', revealItems);

            reload($container);
        };

        return this.each(function () {
            var self = $(this);
            process(self);
        });
    };
}(window.jQuery));