// Replaces recipe inputs to fix things
// Script by vizthex
ServerEvents.recipes(e => {

    // Bowls
    e.replaceInput(
      { input: "bowl" },
        "bowl",
        "#cookcraft:bowl"
    )

    // Crafting Tables
    e.replaceInput(
      { input: "crafting_table" },
        "crafting_table",
        "#forge:crafting_tables"
    )

    // Furnaces
    e.replaceInput(
      { input: "furnace" },
        "furnace",
        "#cookcraft:furnaces"
    )

    // Replace Mangoes with forge:fruits
    e.replaceInput(
      { input: "mango" , not: [{id: "pamhc2foodextended:mangoyogurtitem"}, {id: "pamhc2foodextended:mangosmoothieitem"}, {id: "pamhc2foodextended:mangopieitem"}, {id: "pamhc2foodextended:mangojuiceitem"}, {id: "pamhc2foodextended:mangojellyitem"}, {id: "pamhc2foodextended:mangochutneyitem"}, {id: ""}, {id: ""}] },
        "cozyfoods:mango",
        "#forge:fruits"
    )

})