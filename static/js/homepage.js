$(function () {
    // $('a[href="#searchmodal"]').on('click', function(event) {
      $('.search').on('focus', function(event) {
        event.preventDefault();
        $('#searchmodal').addClass('open');
        $('#searchmodal > input').focus();
    });

    $('#searchmodal a.close').on('click', function(event) {
        // if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).parent().removeClass('open');
        // }
    });

    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })
});
