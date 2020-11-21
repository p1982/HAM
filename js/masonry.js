$('#loadBtn').on('click', showMore);

const container = $("#gallery");
container.delay(3000)
    .masonry({
    itemSelector: ".best-images-item",
    columnWidth: ".sizer",
    percentPosition: true,
    gutter: 5,
});

function showMore (){
    $('.dot:hidden').fadeIn()
        .delay(2000)
        .fadeOut();
    const imgHidden = $('.best-images-item.hidden');

    imgHidden.delay(2500).removeClass('hidden')
    container.delay(3000)
        .append(imgHidden)
        .masonry('appended', imgHidden);
    $('#loadBtn').remove()
}