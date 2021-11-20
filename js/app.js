$(document).ready(function () {
	$(".header i").click(() => {
        $(".header ul").toggle();
        $(".header").addClass("active");
    })
})