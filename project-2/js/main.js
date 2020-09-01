
const screenDispaly = document.getElementById('display-screen');
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied)');

const  count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect =document.getElementById('movie');
let ticketPrice = +movieSelect.value;


// function to update movie trailer
function updateMovieTrailer(movieValue){
    switch(movieValue){
        case 5:

            screenDispaly.innerHTML= '<iframe width="220" height="110" src="https://www.youtube-nocookie.com/embed/I-uIQDRS4a8?start=2" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            break
        case 10:
            screenDispaly.innerHTML='<iframe width="220" height="110" src="https://www.youtube.com/embed/n4YXauObskA?start=9" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

            break;
        case 15:
            screenDispaly.innerHTML= '<iframe width="220" height="110" src="https://www.youtube.com/embed/M_XTnCam1Eg?start=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            break;    
        case 20:
            screenDispaly.innerHTML= '<iframe width="220" height="110" src="https://www.youtube.com/embed/eLEwNo78f0k?start=7" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            break;
    }
}

// function to update counts
function updateSelectedCount(){
    const  selectedSeats = document.querySelectorAll('.row .seat.selected');
    // console.log(selectedSeats);
    const countSelectedSeats= selectedSeats.length;

    // convert the seats into an array
    const seatsIndex = [...selectedSeats].map( seat => [...seats].indexOf(seat));
    console.log(seatsIndex);


  // save the data into local storage
//   localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));

    count.innerText =countSelectedSeats;
    total.innerText = ticketPrice*countSelectedSeats;
    
  
}

// Event listener for change on select movie 

movieSelect.addEventListener('change', (e) =>{
    ticketPrice = +e.target.value;
    updateSelectedCount();
    updateMovieTrailer(ticketPrice);
    // console.log(ticketPrice)
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





