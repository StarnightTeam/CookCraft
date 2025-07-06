// Adds tags to items
// Script by vizthex
ServerEvents.tags("item", e => {

    //// Custom ////

    /// Recipes
    e.add("cookcraft:bowl", ["bowl", "ecologics:coconut_husk"])

    // Furnaces
    e.add("cookcraft:furnaces", ["furnace", "quark:deepslate_furnace", "quark:blackstone_furnace"])

    // Crafting Tables
    e.add("forge:crafting_tables", ["crafting_table", "#biomeswevegone:crafting_tables"])

    //// Forge ////
    /// Fixes
    // Dusts
    e.add("forge:salt/salt", ["pamhc2foodcore:saltitem"])
    e.add("forge:dusts/salt", ["fishermans_haven:salt", "pamhc2foodcore:saltitem", "refurbished_furniture:sea_salt"])


    // Seeds
    e.add("forge:seeds", ["pamhc2crops:bokchoyseeditem", "pamhc2crops:calabashseeditem", "pamhc2crops:guaranaseeditem", "pamhc2crops:papyrusseeditem", "pamhc2crops:sunchokeseeditem"])

    e.add("forge:seeds/calabash", ["pamhc2crops:calabashseeditem"])
    e.add("forge:seeds/guarana", ["pamhc2crops:guaranaseeditem"])
    e.add("forge:seeds/papyrus", ["pamhc2crops:papyrusseeditem"])
    e.add("forge:seeds/sunchoke", ["pamhc2crops:sunchokeseeditem"])

    // Grain
    e.add("forge:grain", ["vintagedelight:oat"])


    // Fruits
    e.add("forge:fruits/mango", ["bountiful_saplings:mango"])


    // Mushrooms
    e.add("mushroomquest:mushrooms", ["mushroomquest:silver_leaf_fungus"])
  

    // Raw Meat
    // It should be raw_meats, but for some reason it"s not
    e.add("forge:rawmeats", ["abnormals_delight:duck_fillet", "abnormals_delight:venison_shanks", "abnormals_delight:perch_slice", "abnormals_delight:pike_slice",

    "aquaculture:fish_fillet_raw",

    "crabbersdelight:crab", "crabbersdelight:raw_clam_meat", "crabbersdelight:pufferfish_slice", "crabbersdelight:tropical_fish_slice", "crabbersdelight:raw_frog_log", "crabbersdelight:raw_squid_tentacles", "crabbersdelight:raw_glow_squid_tentacles",

    "farmersdelight:bacon_cuts", "farmersdelight:chicken_cuts", "farmersdelight:cod_slice", "farmersdelight:salmon_slice", "farmersdelight:mutton_chops", "farmersdelight:ham",

    "nethersdelight:hoglin_loin",

    "ends_delight:raw_dragon_meat", "ends_delight:raw_dragon_meat_cuts",

    "largemeals:raw_mutton_rack",

    "immersive_cooking:raw_spider_shank", "immersive_cooking:raw_spider_cutlet", "quark:crab_leg"])



    //// Removals
    e.removeAllTagsFrom("infested_cobblestone")
    e.removeAllTagsFrom("infested_deepslate")
    e.removeAllTagsFrom("infested_stone")


})



// Block tags
ServerEvents.tags("block", e => {

    // Make the bounty board mineable
    e.add("minecraft:mineable/axe", ["bountiful:bountyboard"])

})