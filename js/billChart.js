(function () {

    var data = [{
            label: 'Plans and Services',
            value: '59.98'

        }, {
            label: 'Taxes and Fees',
            value: '3.68'

        }, {
            label: 'Credits and Discounts',
            value: '-12'
        }, {
            label: 'Joshua - Plans and Services',
            value: '40'
        }, {
            label: 'Joshua - Usage Details',
            value: '0.6'
        }, {
            label: 'Misc',
            value: '3.22'

        }

    ];

    var total = 0;
    var max = 0;
    data.forEach(function (elem, i) {

        total += Math.abs(elem.value);
        max = Math.max(elem.value, max);

    });

    data.forEach(function (elem, i) {


        var height = (elem.value / max) * 90;
        var template = '<div class="barContainer notes" data-placement="top" data-content="' + elem.label + '"><div class="bBar" style="height:' + height + 'px"><span class="elemValue">$' + elem.value + '</span></div></div>';

        if (elem.value < 0) {
            var template = '<div class="barContainer notes" data-placement="top" data-content="' + elem.label + '"><div class="bBar" style="height:' + Math.abs(height) + 'px; bottom:' + height + 'px"><span class="elemValue">$' + elem.value + '</span></div></div>';

        }
        if (elem.value)
            $('.billViz').append(template);



    });
})();