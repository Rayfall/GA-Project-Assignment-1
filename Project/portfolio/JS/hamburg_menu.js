$("#toggle").on('click', function() {
    $('#menu').toggleClass("active");
  });
  
  $(document).keydown(function(e) {
      if (e.keyCode == 27) {
         $('#menu').removeClass("active");
         $('#btnControl').prop('checked', false);
      }
  });