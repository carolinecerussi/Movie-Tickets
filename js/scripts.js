//business logic 

function MovieTicket(movieTitle, movieTime, customerAge, ticketQuanitity ) {
  this.movieTitle = movieTitle;
  this.movieTime = movieTime;
  this.customerAge = customerAge;

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
this.price = newPrice;
return newPrice;

}


//ui logic 
let movie = new MovieTicket ();


// function displayReceipt() {
// document.querySelector ('#movie-title').innerText = this.movieTitle;
// document.querySelector ('#movie-time').innerText = this.movieTime;
// document.querySelector ('#movie-price').innerText = ticketPrice;
// document.querySelector ('div#ticket-receipt').removeAttribute ('class');
// } 


function handleForm (event) {
  event.preventDefault ();
  const inputtedTitle = document.querySelector ('select#new-ticket-title')
    .value;
    console.log(inputtedTitle)
  const inputtedTime = document.querySelector ('select#new-ticket-time').value;
  console.log (inputtedTime);
  const inputtedAge = document.querySelector ('input#new-ticket-age')
    .value;
  console.log(inputtedAge)
  let newMovieTicket =  new MovieTicket(inputtedTitle,inputtedTime,inputtedAge);
  const ticketPrice = newMovieTicket.ticketPrice();
  console.log(ticketPrice)
document.querySelector ('#movie-title').innerText = newMovieTicket.movieTitle;
document.querySelector ('#movie-time').innerText = newMovieTicket.movieTime;
document.querySelector ('#movie-price').innerText = ticketPrice;
document.querySelector ('div#ticket-receipt').removeAttribute ('class');

}


window.addEventListener ('load', function () {
  document.querySelector ('form#new-ticket-form').addEventListener ('submit', handleForm);
})
