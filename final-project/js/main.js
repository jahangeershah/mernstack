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
                { id: 1, name: 'steak Dinner', Calories: 1200 },
                { id: 2, name: 'Cookie', Calories: 1400 },
                { id: 3, name: 'Eggs', Calories: 400 }
            ],
            currentItem: null,
            totalCalories: 0
        }
        // Public Methods
    return {
        getItems: function() {
            return data.items;
        },

        logData: function() {
            return data;
        }
    }

})();



// UI Controller
const UICtrl = (function() {

    const UISelectors = {
            itemList: '#item-list'
        }
        // Public Methods
    return {
        populateItemList: function(items) {
            let html = '';

            items.forEach(function(item) {
                html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}:</strong> <em>${item.Calories} Calories</em>
                <a href="#" class="secondary-content">
                    <i class=" edit-item fa fa-pencil"></i>
                </a>
            </li>`
            });

            // insert list items 
            document.querySelector(UISelectors.itemList).innerHTML = html;
        }
    }
})();

// Ap Controller

const App = (function(ItemCtr, UICtrl) {

    // console.log(ItemCtrl.logData())

    //Public methods
    return {
        init: function() {
            console.log('initializing App...');
            // fetch data from data structure
            const items = ItemCtr.getItems();
            // console.log(items);

            // Poplutate list with items
            UICtrl.populateItemList(items);
        }
    }

})(ItemCtrl, UICtrl);


// Initializing app

App.init();