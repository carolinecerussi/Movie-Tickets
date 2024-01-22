//business logic 

function MovieTicket(movieTitle, movieTime, customerAge, ticketQuanitity ) {
  this.movieTitle = movieTitle;
  this.movieTime = movieTime;
  this.customerAge = customerAge;
  this.ticketQuanitity = ticketQuanitity;

}


MovieTicket.prototype.ticketPrice = function() {
  moviePrice = 0;
  let newPrice ;
  let agePrice;
const time = this.movieTime.split ('')[0];
console.log(time);
if (this.customerAge <= 5 && time <= 5)  {
    agePrice = 0;
    newPrice = 0;
  } else if (this.customerAge > 5 && this.customerAge < 15 || this.customerAge >= 65 ) {
    agePrice = moviePrice + 6;
    if (time <= 5) {
  newPrice = agePrice + 1;
} else {
  newPrice = agePrice + 3;
}
  } else {
    agePrice = moviePrice + 10;
    if (time <= 5) {
  newPrice = agePrice + 1;

} else {
  newPrice = agePrice + 3;
}
  }
this.oneTicket = newPrice;
return newPrice;

}



MovieTicket.prototype.getQuantity = function() {
const quantity = this.ticketQuanitity;
const oneTicketPrice = this.ticketPrice ();
console.log(oneTicketPrice)
let totalPrice = 0;
console.log(quantity);
if (this.ticketQuanitity === "0"){
  totalPrice = 0; 
  console.log(totalPrice);
} else {
  totalPrice = oneTicketPrice * parseInt(this.ticketQuanitity) 
return totalPrice;
}
}

//ui logic 
let movie = new MovieTicket ();


// function displayReceipt() {
// document.querySelector ('#movie-title').innerText = this.movieTitle;
// document.querySelector ('#movie-time').innerText = this.movieTime;
// document.querySelector ('#movie-price').innerText = ticketPrice;
// document.querySelector ('div#ticket-receipt').removeAttribute ('class');
// } 
function getRadioOption() {
  const radioOptions = document.querySelectorAll('input#new-ticket-title');
  let selectedMovie ;
  for (const radioOption of radioOptions){
    if (radioOption.checked){
      selectedMovie = radioOption.value;
      console.log(selectedMovie)
    }
  }return selectedMovie;

}


function handleForm (event) {
  event.preventDefault ();
const inputtedTitle = getRadioOption();
  const inputtedTime = document.querySelector ('select#new-ticket-time').value;
  console.log (inputtedTime);
  const inputtedAge = document.querySelector ('input#new-ticket-age')
    .value;
  console.log(inputtedAge);
  const inputtedQuantity = document.querySelector("input#new-quantity").value;
  console.log(inputtedQuantity)
  let newMovieTicket =  new MovieTicket(inputtedTitle,inputtedTime,inputtedAge, inputtedQuantity);
  const totalPrice = newMovieTicket.getQuantity();
  console.log(totalPrice)
  const ticketPrice = newMovieTicket.ticketPrice();
document.querySelector ('#movie-title').innerText = newMovieTicket.movieTitle;
document.querySelector ('#movie-time').innerText = newMovieTicket.movieTime;
document.querySelector('#quantity').innerText = newMovieTicket.ticketQuanitity;
document.querySelector ('#ticket-price').innerText = ticketPrice;

document.querySelector ('#movie-price').innerText = totalPrice;

document.querySelector ('div#ticket-receipt').removeAttribute ('class');


}


window.addEventListener ('load', function () {
  document.querySelector ('form#new-ticket-form').addEventListener ('submit', handleForm);
})
