
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied)');
const  count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect =document.getElementById('movie');
let ticketPrice = +movieSelect.value;


// function to update counts
function updateSelectedCount(){
    const  selectedSeats = document.querySelectorAll('.row .seat.selected');
    const countSelectedSeats= selectedSeats.length;
    count.innerText =countSelectedSeats;
    total.innerText = ticketPrice*countSelectedSeats;
  
}

// Event listener for change on select movie 

movieSelect.addEventListener('change', (e) =>{
    ticketPrice = +e.target.value;
    updateSelectedCount();
});


// Event Listener for click on Available seats
container.addEventListener('click',(e) =>{
    // we can listen click on any seat we can get the div in console
    // console.log(e.target);
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        // e.target.classList.add('selected'); we can't use add because it is only to select Not for unselect
        e.target.classList.toggle('selected');
        updateSelectedCount ();
    }
});



