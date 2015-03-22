var searchDropdown = $('.search').html();
var navDropdown = $('.sidebar nav').html();
$('.dropdown-search').append(searchDropdown);
$('.dropdown-menu').append(navDropdown);

$('#icon-search').click(function() {
  $('.dropdown-menu').hide();
  $('.dropdown-search').toggle();
});

$('#icon-menu').click(function() {
  $('.dropdown-search').hide();
  $('.dropdown-menu').toggle();
});

/* jQuery media queries */

$(window).resize(function() {
  if ($(window).width() > 767 ) {
    $('[class*="dropdown"]').hide();
  }
});