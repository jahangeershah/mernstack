

const  seats= document.querySelector('.fa-couch');




// const container = document.querySelector('.container');
// const seats = document.querySelectorAll('.row .fa-couch:not(.occupied)');
// const  count = document.getElementById('count');
// const total = document.getElementById('total');
// const movieSelect =document.getElementById('movie');
// let ticketPrice = +movieSelect.value;


// seats.addEventListener('click',(e)=>{
//     console.log()
// });

// // function to update counts
// function updateSelectedCount(){
//     const  selectedSeats = document.querySelectorAll('.row .fa-couch.selected');
//     console.log(selectedSeats);
//     const countSelectedSeats= selectedSeats.length;

//     // convert the seats into an array
//     const seatsIndex = [...selectedSeats].map( seat => [...seats].indexOf(seat));
//     console.log(seatsIndex);


//   // save the data into local storage
// //   localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));

//     count.innerText =countSelectedSeats;
//     total.innerText = ticketPrice*countSelectedSeats;
    
  
// }

// // Event listener for change on select movie 

// movieSelect.addEventListener('change', (e) =>{
//     ticketPrice = +e.target.value;
//     updateSelectedCount();

   
// });


// // Event Listener for click on Available seats
// container.addEventListener('click',(e) =>{
//     // we can listen click on any seat we can get the div in console
//     // console.log(e.target);
//     if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
//         // e.target.classList.add('selected'); we can't use add because it is only to select Not for unselect
//         e.target.classList.toggle('selected');
//         updateSelectedCount ();
//     }
// });



