// Adds items to Forestry's backpacks
// Order is Minecraft tags, Forge tags, modpack tags, then modded items (alphbetized by the mod name, then the registry name)
// Script by vizthex
ServerEvents.tags("item", e => {

    // Digger
    e.add("forestry:backpack/allow/digger", ["biomeswevegone:peat"])


    // Miner
    e.add("forestry:backpack/allow/miner", ["#forge:dusts/salt"])


    // Forester
    e.add("forestry:backpack/allow/forester", ["#minecraft:saplings", "kelp",

    "#forge:berries", "#forge:fruits", "#forge:nuts", "#forge:vegetables",
    "#mushroomquest:mushrooms"])


    // Hunter
    e.add("forestry:backpack/allow/hunter", ["#forge:rawmeats", "aquaculture:jellyfish"])


    // Adventurer
    e.add("forestry:backpack/allow/adventurer", ["#coinsje:coin_like", "#minecraft:decorated_pot_sherds", "#minecraft:trim_templates", "#forge:books",
    "netherite_upgrade_smithing_template", "ae2:fluix_upgrade_smithing_template",

    "chest", "experience_bottle", "enchanted_golden_apple"])


    // Builder
    e.add("forestry:backpack/allow/builder", ["#forge:crafting_tables", "#cookcraft:furnaces", "#quark:shards", "#quark:vertical_slabs",

    "bamboo_mosaic", "deepslate_bricks", "cracked_deepslate_bricks", "mud_bricks", "blast_furnace", "smoker",

    "quark:sturdy_stone", "quark:thatch"
    ])

})