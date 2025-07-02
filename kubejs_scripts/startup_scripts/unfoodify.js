// Script by Lyria
ItemEvents.modification(event => {
  // Loop through the list of food items and remove their food properties
  // aka "unfood" them
  global.remove_and_replace.forEach(item_array => {
    var item = item_array[0]; // The old item name
    // Remove food properties from the item
    event.modify(item, item => {
      item.foodProperties = null
    })
  })

})