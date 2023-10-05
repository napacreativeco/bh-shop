(function($) {

    $(document).ready(function() {
        console.log('ready');
    });

    $('.close-drawer').on('click', function() {
        $('body').removeClass('js-my-cart-open');
    });
})(jQuery);