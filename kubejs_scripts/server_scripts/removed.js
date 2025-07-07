// Removes recipes for whatever reason
// Script by vizthex
ServerEvents.recipes(e => {

    // Remove the duplicate bread recipe
    e.remove({id: "minecraft:bread"})

    // Ecologics' coconut husk recipes
    e.remove({id: "ecologics:beetroot_soup_from_coconut_husk"})
    e.remove({id: "ecologics:mushroom_stew_from_coconut_husk"})
    e.remove({id: "ecologics:rabbit_stew_from_red_mushroom_and_coconut_husk"})
    e.remove({id: "ecologics:rabbit_stew_from_brown_mushroom_and_coconut_husk"})

    // Remove the Tapioca Pearl recipe
    e.remove([{ type: "minecraft:smelting", output: "cozyfoods:tapioca_pearls" }, { type: "minecraft:smoking", output: "cozyfoods:tapioca_pearls" }])

})