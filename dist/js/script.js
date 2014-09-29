/**
 * Created by Ganapati on 29-09-2014.
 */
$(document).ready(function() {
    $('#yearSlider').slider({
        formatter: function (value) {
            return 'Year choosen: ' + value;
        }
    });
    $('.selectForm').hide();
});

$('.filterContents').bind('click',function(){

   $(this).next().toggle();
});