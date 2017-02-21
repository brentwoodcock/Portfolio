$('#contact-form').on('submit', function(e) {
	var successMessage = "Contact form succesfully submitted. I will get back to you soon, thanks!";
	var alertHtmlString = "<div class='alert alert-success alert-dismissable animated bounceIn'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button>" + successMessage + "</div>";
	$('.messages').html(alertHtmlString);
})