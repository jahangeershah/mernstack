var cardsArray = [
    { 'name': 'CSS', 'img': 'https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true', },
    { 'name': 'HTML', 'img': 'https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true', },
    { 'name': 'jQuery', 'img': 'https://github.com/robgmerrill/img/blob/master/jquery-logo.png?raw=true', },
    { 'name': 'JS', 'img': 'https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true', },
    { 'name': 'Node', 'img': 'https://github.com/robgmerrill/img/blob/master/nodejs-logo.png?raw=true', },
    { 'name': 'Photo Shop', 'img': 'https://github.com/robgmerrill/img/blob/master/photoshop-logo.png?raw=true', },
    { 'name': 'PHP', 'img': 'https://github.com/robgmerrill/img/blob/master/php-logo_1.png?raw=true', },
    { 'name': 'Python', 'img': 'https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true', },
    { 'name': 'Ruby', 'img': 'https://github.com/robgmerrill/img/blob/master/rails-logo.png?raw=true', },
    { 'name': 'Sass', 'img': 'https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true', },
    { 'name': 'Sublime', 'img': 'https://github.com/robgmerrill/img/blob/master/sublime-logo.png?raw=true', },
    { 'name': 'Wordpress', 'img': 'https://github.com/robgmerrill/img/blob/master/wordpress-logo.png?raw=true', },
];


// cardsArray[0] , css
// cardsArray[1].image 'imageURL
// grapb the div wth id of game 

// dublicate the Cards 
var gameGraid = cardsArray.concat(cardsArray);


// randomize game grid on each load
gameGraid.sort(function() {
    return 0.5 - Math.random();
});

// get div of the game board
var game = document.getElementById('game-board');


// create a section element and assign it to variable grid
var grid = document.createElement('section');

// Append the grid section
grid.setAttribute('class', 'grid')

// append grid section to the game-board div

game.appendChild(grid);

for (i = 0; i < gameGraid.length; i++) {
    var card = document.createElement('div');

    card.classList.add('card');

    card.dataset.name = gameGraid[i].name;

    card.style.backgroundImage = `url(${gameGraid[i].img})`;

    grid.appendChild(card);
}

var firstGuess = '';
var secondGuess = '';


// set count to 0
var count = 0;



// Add match CSS
var match = function() {
    var selected = document.querySelectorAll('selected')

    // loop through the array object contain selected class
    for (i = 0; i < selected.length; i++) {
        selected[i].classList.add('match')
    }

}

// Add event listner to grid
grid.addEventListener('click', function(event) {
    // declare variable to target our clicked item

    var clicked = event.target;

    // removing if the user click between two boxes
    if (clicked.nodeName == 'SECTION') {
        return;
    }

    // we only want to add selecte class if the current count is less than 2
    if (count < 2) {
        count++;

        if (count == 1) {
            firstGuess = clicked.dataset.name;
            clicked.classList.add('selected');
        } else {
            // add selected class
            secondGuess = clicked.dataset.name;
            clicked.classList.add('selected')
        }

        if (firstGuess !== '' && secondGuess !== '') {

            // add the firstGuess matches secondGuess
            if (firstGuess == secondGuess) {
                match();
            }
        }
    }



})