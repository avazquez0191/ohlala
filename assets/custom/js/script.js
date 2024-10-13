(function($){

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

function getTicket() {
    var date = new Date();
    var fullDate = date.getTime();
    var random = Math.floor(100000 + Math.random() * 900000);
    return 'ohlala-' + fullDate;
};

$('#generate-ticket').on('click', function(){
    $('#generated-ticked').html(getTicket());
    $(this).hide();
});

function scrollTo(selector) {
    var target = $(selector);
    $('html,body').animate({
        scrollTop: target.offset().top - $('#menu-3 nav').height()
    }, 1000);
}

$('[scroll-to]').on('click', function(){
    scrollTo($(this).attr('scroll-to'));
});

})(jQuery);