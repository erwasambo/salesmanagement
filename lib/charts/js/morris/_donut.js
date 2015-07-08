(function ($) {
    "use strict";

    $.fn.tkMorrisChartDonut = function () {

        if (! this.length) return;

        if (! this.attr('id')) return;

        var skin = require('../lib/_skin')();

        this.empty();

        new Morris.Donut({
            element: this.attr('id'),
            colors: [ colors[ 'danger-color' ], config.skins[ skin ][ 'primary-color' ], colors[ 'default-color' ] ],
            data: [
                {label: "Logged In", value: 12},
                {label: "Logged Out", value: 30},
                {label: "Inactive", value: 20}
            ]
        });

    };

    $(function () {

        $('[data-toggle="morris-chart-donut"]').tkMorrisChartDonut();

        $('[data-skin]').on('click', function(){

            $('[data-toggle="morris-chart-donut"]').tkMorrisChartDonut();

        });

    });

})(jQuery);