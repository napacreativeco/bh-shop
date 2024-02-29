(function($) {

    $(document).ready(function() {
        console.log('ready');
    });

    $('.close-drawer').on('click', function() {
        $('body').removeClass('js-my-cart-open');
    });


    $('.open-navbar-overlay').on('click', function() {
        $('.navbar-overlay').css('transform', 'translateX(0%)');
    });

    $('.close-navbar-overlay').on('click', function() {
        $('.navbar-overlay').css('transform', 'translateX(-100%)');
    });
})(jQuery);