// stoage controller


// Item controller
const ItemCtrl = (function() {
    // Item constructor
    const Item = function(id, name, caloires) {
        this.id = id;
        this.name = name;
        this.calories = calories;

    }

    // Data Structure / State 
    const data = {
            items: [
                { id: 0, name: 'steak Dinner', Calories: 1200 },
                { id: 2, name: 'Cookie', calories: 1200 },
                { id: 3, name: 'Eggs', Calories: 1200 }
            ],
            currentItem: null,
            totalCalories: 0
        }
        // Public Methods
    return {
        logData: function() {
            return data;
        }
    }

})();



// UI Controller
const UICtrl = (function() {
    // Public Methods
    return {

    }
})();

// Ap Controller

const App = (function(ItemCtr, UICtrl) {

    // console.log(ItemCtrl.logData())

    //Public methods
    return {
        init: function() {
            console.log('initializing App...');
        }
    }

})(ItemCtrl, UICtrl);


// Initializing app

App.init();