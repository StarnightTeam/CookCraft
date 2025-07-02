// Made by Lyria
// WIP, when we have more foods I'll make a function

ItemEvents.modification(event => {
  event.modify('cozyfoods:tapioca_pearls', item => {
    item.foodProperties = food => {
        food.hunger(1)
        food.saturation(1)
    }
  })

})

ItemEvents.modification(event => {
  event.modify('minecraft:stick', item => {
    item.foodProperties = food => {
        food.hunger(1)
        food.saturation(1)
    }
  })

})