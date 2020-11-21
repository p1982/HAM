(function($) {
    $(function() {

        $('ul.tabs').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.centered-content').find('li.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);
// const listText = [...document.querySelectorAll(".our-services-list li")];
// const listItems = [...document.querySelectorAll(".our-services-nav-item")];
// listItems.forEach(elem => elem.addEventListener("click", toggle));
//
// function toggle(e) {
//     e.target.closest("ul").querySelector(".active").classList.remove("active");
//     e.target.classList.add("active");
//     const index = listItems.findIndex(elem => elem.classList.contains("active"));
//     showText(index)
// }
//
// function showText(index) {
//     console.log(index);
//     listText.forEach(elem => elem.classList.add("hidden"));
//     listText[index].classList.remove("hidden");
// }
