$(document).ready(function(){

  /* jQuery events */

  // Get html of search and navigation elements
  var searchDropdown = $('.search').html();
  var navDropdown = $('.sidebar nav').html();
  // Insert html of search and navigation elements into dropdowns
  $('.dropdown-search').append(searchDropdown);
  $('.dropdown-menu').append(navDropdown);


  // Events for dropdown buttons
  $('#icon-search').on('click', function() {
    $('.dropdown-menu').hide();
    $('.dropdown-search').toggle();
  });

  $('#icon-menu').on('click', function() {
    $('.dropdown-search').hide();
    $('.dropdown-menu').toggle();
  });

  /* jQuery media queries */

  // Hide dropdowns on large screens, if they were opened before increasing the width of the window
  $(window).resize(function() {
    if ($(window).width() > 767 ) {
      $('[class*="dropdown"]').hide();
    }
  });

});