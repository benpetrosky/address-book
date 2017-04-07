//business logic
function Contact(first, last) {   //--2--> creates an object with parameters referencing each of its properties
  this.firstName = first;         //--2--> creates the property (this.firstName) in reference to the (first) parameter to the object
  this.lastName = last;           //--2--> creates the property (this.lastName) in reference to the (last) parameter of the object
}
Contact.prototype.fullName = function() { //--4--> creates a fullName function using the properties of the Contact function
  return this.firstName + " " + this.lastName; //--4--> defines fullName as a concatination of Contact properties.
}

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val(); //--1--> collects input from user and converst it to a variable
    var inputtedLastName = $("input#new-last-name").val(); //--1--> collects input from user and converst it to a variable

    var newContact = new Contact(inputtedFirstName, inputtedLastName); //--3--> creates a variable that runs through the object funtion (Contact) in the business logic with parameters that align with (Contact) parameters

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>"); //--5--> calls the new contact utilizing the fullName function.

    $(".contact").last().click(function() {   //--6--> creates a function that displays all contact info upon clicking on specific contact full name.
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName); //--6--> uses Contact properties to display inputs
      $(".first-name").text(newContact.firstName);      //--6--> uses Contact properties to display inputs
      $(".last-name").text(newContact.lastName);        //--6--> uses Contact properties to display inputs
    })

    $("input#new-first-name").val("");  //----> clears the input fields upon submiting
    $("input#new-last-name").val("");
  });
});
