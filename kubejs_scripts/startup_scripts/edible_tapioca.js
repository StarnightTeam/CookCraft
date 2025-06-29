ItemEvents.modification(event => {
  event.modify('cozyfoods:tapioca_pearls', item => {
    item.foodProperties = food => {
        food.hunger(1)
        food.saturation(1)
    }
  })

})