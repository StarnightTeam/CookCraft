var items_to_add = 
[
    'nebulus_chicken:lavachickenwing'
];

var items_to_remove = 
[
    'fishermans_haven:fishermans_knife',
    'nebulus_chicken:chickenshop',
    'fishermans_haven:crab_item',
];



// Add specific items listed in items_to_add to JEI
JEIEvents.addItems(event => {
    items_to_add.forEach(item => {
        event.add(item)
    });
})

// Hide specific items listed in items_to_remove from JEI
JEIEvents.hideItems(event => {
    items_to_remove.forEach(item => {
        event.hide(item)
    });
})

// Hide items from the global.remove_and_replace array in JEI
JEIEvents.hideItems(event => {
    // Loop through the list of items to remove and hide each one
    global.remove_and_replace.forEach(item_array => {
        var item = item_array[0]; // The old item name
        event.hide(item)
    })
})






/*
// Hide items from Applied Energistics 2 for the time being!
// DOES NOT WORK
function hideItemsByModID(modID) {
    JEIEvents.hideItems(event => {
        event.getAllItems().forEach(item => {
            if (item.getId().startsWith(modID)) {
                event.hide(item);
            }
        });
    });
}

hideItemsByModID('ae2');
*/