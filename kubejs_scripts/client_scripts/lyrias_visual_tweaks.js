var items_to_remove = 
[
    'fishermans_haven:fishermans_knife',
    'fishermans_haven:crab_item',
    'nebulus_chicken:chickenshop'
];

var items_to_add = 
[
    'nebulus_chicken:lavachickenwing'
];

JEIEvents.hideItems(event => {
    items_to_remove.forEach(item => {
        event.hide(item)
    });
})
JEIEvents.addItems(event => {
    items_to_add.forEach(item => {
        event.add(item)
    });
})

ClientEvents.lang('en_us', event => {
    event.renameItem('crabbersdelight:crab', 'Raw Crab');
})

// Hide items from Applied Energistics 2 for the time being!
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