// Sets the name of the KubeJS mod to 'CookCraft'
Platform.mods.kubejs.name = 'CookCraft';

// Cancels farmland trampling if the player has Feather Falling IV on their boots
BlockEvents.farmlandTrampled(event => {
  if(event.player.feetArmorItem.hasEnchantment('minecraft:feather_falling', 4)) e.cancel()
})

// WIP - Lyria
/*LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:chicken")
        .matchDamageSource((source) => {
            // Your code. Check DamageSourcePredicateBuilderJS for more information
        }) 
        .addLoot("minecraft:diamond");
});*/

/*
// Does not work - calls the loot table twice

LootJS.modifiers((event) => {
    event
      .addEntityLootModifier("quark:entity/crab")
      
      // Add one of the two exclusive crab claws with weighted chance
      .addAlternativesLoot(
        LootEntry.of("fishermans_haven:crab_claw").when((c) => c.randomChance(0.02)),
        LootEntry.of("crabbersdelight:crab_claw").when((c) => c.randomChance(0.1))
    )
  
      // Add 0–3 quark:crab_leg with 50% chance per leg
      .addWeightedLoot(
        [0, 3],
        Item.of("quark:crab_leg").withChance(0.1)
      )
      .addLoot("crabbersdelight:crab")

  })


*/