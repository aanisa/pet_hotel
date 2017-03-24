
$(document).ready(function(){
  console.log('jQ totes sourced!');

  getPets();
  $('#petInput').on('submit', function(event){
    event.preventDefault();
    console.log($('#petName').val(), $('#petColor').val(), $('#petBreed').val());

    $.ajax({
      type: "POST",
      url: "/pets/add",
      data: {name: $('#petName').val(), color:$('#petColor').val(), breed:$('#petBreed').val()},
      success: function(response) {
        getPets();
      }
    });
  });
});

function getPets() {
  $.ajax({
    type: 'GET',
    url: '/pets',
    success: function(response) {
      console.log(response);
      // displayPets(response);
    }
  });
}

//
// Owner Name<input type="text" id="ownerSelect">
// Pet Name<input type="text" id="petName">
// Color<input type="text" id="petColor">
// Breed<input type="text" id="petBreed">
// <button type="button" id="addPet">Add Pet</button>
//
// function getPets() {
// $.ajax({
// type: "GET",
// url: "/pets",
// success: function(response) {
// console.log(response);
// $('#getPets').empty();
// for(var i = 0; i < response.length; i++) {
//   var book = response[i];
//   $('#books').append('<tr></tr>');
//   var $el = $('#books').children().last();
//   $el.append('<td>' + book.id + '</td>');
//   $el.append('<td>' + book.author + '</td>');
//   $el.append('<td>' + book.title + '</td>');
//   $el.append('<td>' + book.publisher + '</td>');
//   $el.append('<td>' + book.year + '</td>');
// }
// }
// });
// }
//
// function displayPets(pets) {
//   $("#outputDiv").empty();
//   for(var i = 0; i < pets.length; i++) {
// // console.log(pets[i]);
//     $("#outputDiv").append("<span>" +
//                     pets[i].whoseJoke +
//                     ": " +
//   pets[i].jokeQuestion + ": " + pets[i].punchLine +
//                                "</span><br>");
//   }
// }

//
