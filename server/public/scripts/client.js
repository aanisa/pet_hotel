
$(document).ready(function(){
  console.log('jQ totes sourced!');

  // call addEventListeners() function
  addEventListeners();


  $.ajax({        //register-owner ajax request
    type: 'POST',
    url: '/registerOwner',
    success: function (response) {
      console.log(response);
    }
  });//end ajax

});

// main function for all event listeners
function addEventListeners() {
  // add on.click listener for update "go" button
  // -- may want to add an ID to <table> and change this
  // to target the table ID -- this listener assumes the update
  // buttons will have a class of "update" (change accordingly if needed)
  $('table').on('click', '.update', function() {
    // assumes an id is attached to the button when it is created
    var id = $(this).data.id;
    // make AJAX call to server
    $.ajax({
      type: 'PUT',
      url: '/update/:' + id, // send pet id as a variable in the url
      data: {
        owner: $(this).data.owner,// may not be editable?
        pet: $(this).data.pet,
        breed: $(this).data.breed,
        color: $(this).data.color
      },
      success: function() {
        console.log('our update call to the server was successful');
      }
    }); // end ajax call
  }); // end click listener for table-update button
  
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

}

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
