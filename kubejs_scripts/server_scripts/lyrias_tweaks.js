BlockEvents.farmlandTrampled(event => {
  if(event.player.feetArmorItem.hasEnchantment('minecraft:feather_falling', 4)) e.cancel()
})

Platform.mods.kubejs.name = 'CookCraft';
/*
ServerEvents.recipes(event => { 
    
    event.replaceInput(
        { input: 'fishermans_haven:fishermans_knife' }, // Arg 1: the filter
        'fishermans_haven:fishermans_knife',            // Arg 2: the item to replace
        '#forge:tools/knives'         // Arg 3: the item to replace it with
      )
    


ServerEvents.recipes(event => {
    remove_and_replace.forEach(item => {
        event.remove({output: item[0]})
        if (item[1] !== null && item[1] !== undefined) {
        event.replaceInput(
            { input: item[0] },
            item[0],
            item[1]) }
        event.replaceOutput(
            { output: item[0] },
            item[0],
            item[1])
    });
})
    
})
*/

/*
// file: kubejs/server_scripts/crab_loot.js

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