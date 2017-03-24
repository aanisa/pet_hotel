
$(document).ready(function(){
  console.log('jQ totes sourced!');

$.ajax({
  type: 'POST',
  url: '/registerOwner',
  success: function (response) {
    console.log(response);
  }
});//end ajax



});//end doc ready
