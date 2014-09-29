/**
 * Created by Ganapati on 29-09-2014.
 */
$(document).ready(function() {
    $('#yearSlider').slider({
        formatter: function (value) {
            return 'Current value: ' + value;
        }
    });
});