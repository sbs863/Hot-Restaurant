
var allGuests = [];

// constructor
function Guest(id, name, phoneNumber, email) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
}



// user fills out the form and hits 'submit'
$('#submit').on('click', function() {
    var newGuest = [{
        id: $('#id').val().trim(),
        name: $('#name').val().trim(),
        phoneNumber: $('#phoneNumber').val().trim(),
        email: $('#email').val().trim()
    }];
    
    var guest = new Guest(newGuest.id, newGuest.name, newGuest.phoneNumber, newGuest.email);
    // push to the array
    allGuests.push(guest);
});






    // $.post('http://localhost:3000/api/new', newGuest)
    //     .done(function (data) {
    //         console.log(data);
    //     });




// $('#currentReservations')
