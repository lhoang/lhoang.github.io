document.addEventListener( "DOMContentLoaded", function () {
    var switches = document.querySelectorAll( '[role="switch"]' );

    Array.prototype.forEach.call( switches, function( el, i ) {
        el.addEventListener( 'click', function() {
            var checked = this.getAttribute( 'aria-checked' ) == 'true' || false;
            this.setAttribute( 'aria-checked', !checked );

            var chart = this.parentNode.nextElementSibling.children[0];
            chart.classList.toggle( 'chart-final' );
        });
    });
});