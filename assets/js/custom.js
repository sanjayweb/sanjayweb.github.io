


// Show Dropdown Options
// function optionDropdown() {
// 	var element = document.getElementById("optionItems");
// 	element.classList.toggle("show");
//  }

 $(document).ready(function () {
    $('.expander').click(function () {
        $(this).removeClass("show");
        $(this).next().toggleClass("show");
    });
    $('.optionItems').slideUp(200);
	
	$(document).on("click", function(a) {
		if ($(a.target).is(".expander") === false) {
		  $(".optionItems").removeClass("show");
		}
	  });


	$('.open-modal').click(function() {
		$('.modal#'+$(this).data('dialog')).addClass('modal--active');
	});
	$('.modal-close').click(function() {
		$('.modal').removeClass('modal--active');
	});

});

