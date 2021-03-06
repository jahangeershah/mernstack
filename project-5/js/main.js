// https://randomuser.me/api
const main = document.getElementById('main');
const addUserButton = document.getElementById('add-user');
const doubleMoneyButton = document.getElementById('double');
const showMillionaireButton = document.getElementById('show-millionaires');
const sort = document.getElementById('sort');
const totalButton = document.getElementById('calculate-millionaires');

let data = [];
generateRanomUsers()



// initializing data Array to store random names
async function generateRanomUsers(){
   const resp = await fetch('https://randomuser.me/api');
   const data = await resp.json();
   const user = data.results[0];
   const newUser  = {
       name : `${user.name.first} ${user.name.last}`,
       worth: Math.round(Math.random()*1000) 
   }
   addData(newUser);


}


// add Newly added user into the temp array
function addData(newUser){
    data.push(newUser);
    updateDom()
}

function updateDom(inputData = data){

    inputData.forEach(Items =>{
        const  element = document.createElement('div');
        element.classList.add('name');
        element.innerHTML = `<strong>${Items.name}</strong>$ ${formateCurrency(Items.worth)}`;
        main.appendChild(element);
    })
}

// format the currency in dollar function

function formateCurrency(convertToDollar){
    return (convertToDollar).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');;
}

// make the wort doble 
function doubleWorth(){
    data = data.map(item =>{
        return { ...item, worth: item.worth * 2}
    });
    updateDom();
}

// sort the Richest
function sortRichest(){
    data.sort( (a,b) => a.worth - b.worth )
    updateDom();
}



// Listners for Button
addUserButton.addEventListener('click',generateRanomUsers)
// Event listener to double the amount
doubleMoneyButton.addEventListener('click',doubleWorth);

// Eventlistner to sort the users
sort.addEventListener('click',sortRichest);




