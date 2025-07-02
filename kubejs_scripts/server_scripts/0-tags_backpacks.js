// Adds items to Forestry"s backpacks
ServerEvents.tags("item", e => {

    // Digger
    e.add("forestry:backpack/allow/digger", [])


    // Miner
    e.add("forestry:backpack/allow/miner", ["#forge:dusts/salt"])


    // Forester
    e.add("forestry:backpack/allow/forester", ["#minecraft:saplings", "kelp",

    "#forge:berries", "#forge:fruits", "#forge:nuts", "#forge:vegetables",
    "#mushroomquest:mushrooms"])


    // Hunter
    e.add("forestry:backpack/allow/hunter", ["#forge:rawmeats", "aquaculture:jellyfish"])


    // Adventurer
    e.add("forestry:backpack/allow/adventurer", ["#minecraft:decorated_pot_sherds", "#minecraft:trim_templates", "#forge:books",
    "netherite_upgrade_smithing_template", "ae2:fluix_upgrade_smithing_template",

    "chest", "experience_bottle", "enchanted_golden_apple"])


    // Builder
    e.add("forestry:backpack/allow/builder", [])

})