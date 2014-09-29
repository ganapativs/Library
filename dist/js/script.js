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

(function () {
    'use strict';
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style')
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        )
        document.querySelector('head').appendChild(msViewportStyle)
    }
})();