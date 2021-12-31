/* Gère le changement d'écran et les transitions */

const screens = [
    "#S1", 
    "#S2", 
    "#S3", 
    "#S4",
    "#S5", 
    "#S6", 
    "#S7"
];
var actualScreen = 1;
function nextScreen () {
    setTimeout(function(){
        $(screens[actualScreen - 1]).fadeOut((actualScreen === 4) ? 'fast' : 'slow',function() {
            $(screens[actualScreen++]).show();
            if (actualScreen === 7) {
                $( '#S7' ).toggleClass('d-none').toggleClass('d-flex');
                $( '.screen' ).css('height', 'auto');
            } else {
                pathRangeSlider();
            }
        });
    }, 300);
}

pathRangeSlider();