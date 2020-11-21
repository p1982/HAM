$('.our-work-nav-item').on('click', function () {
    $('.our-work-nav-list li').removeClass('active');
    $(this).addClass('active');

    const allWorks = $(this).attr('data-filter');

    if (allWorks === 'all') {
        $('.our-work-list-img li').hide();
        console.log('after hide');
        showImages()
    } else {
        $('.our-work-list-img li').hide();
        $('.our-work-list-img li[data-filter="' + allWorks + '"]').show();
    }
});

$("#loadMore").on('click', showImages);

function showImages() {
    $('.dot:hidden').fadeIn()
        .delay(2000)
        .fadeOut();
    $(".our-work-item-img:hidden").delay(2500)
        .slice(0, 12).slideDown().queue(function () {
        console.log(111)
        if ($(".our-work-item-img:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
    })


}


// $('.our-work-nav-item').on('click', function() {
//     $('.our-work-nav-list li').removeClass('active');
//     $(this).addClass('active');
//
//     const allWorks = $(this).attr('data-filter');
//
//     if (allWorks === 'all') {
//         $('.our-work-list-img li').hide();
//         console.log('after hide');
//         showImages()
//     } else {
//         $('.our-work-list-img li').hide();
//         $('.our-work-list-img li[data-filter="' + allWorks + '"]').show();
//     }
// });
//
// $("#loadMore").on('click', showImages);
//
// function showImages () {
//     $(".our-work-item-img:hidden").slice(0, 12).slideDown();
//     if ($(".our-work-item-img:hidden").length == 0) {
//         $("#loadMore").fadeOut('slow');
//     }
// }
