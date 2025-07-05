// Adds quality-of-life recipes cuz i'm addicted lol
// Script by vizthex
ServerEvents.recipes(e => {

    ///// Furnace upgrades with tags
    /// Makes them use my custom tag
    // Furnace
    e.remove({output: "smoker"})
    e.remove({output: "blast_furnace"})
    e.remove({output: "furnace_minecart"})

    // Smoker
    e.shaped(
      "smoker",
        [
          " L ",
          "LFL",
          " L ",
        ],
        {
          F: "#cookcraft:furnaces",
          L: "#minecraft:logs"
        }
    ).id("kubejs:smoker")

    // Blast Furnace
    e.shaped(
      "blast_furnace",
        [
          "III",
          "IFI",
          "SSS"
        ],
        {
          F: "#cookcraft:furnaces",
          I: "iron_ingot",
          S: ["smooth_stone", "smooth_basalt"]
        }
    ).id("kubejs:blast_furnace")

    // Minecart with Furnace (the most useless item lol)
    e.shaped(
      "furnace_minecart",
        [
          "F",
          "M"
        ],
        {
          F: "#cookcraft:furnaces",
          M: "minecart"
        }
    ).id("kubejs:furnace_minecart")

    e.shaped(
      "furnace_minecart",
        [
          "IFI",
          "III"
        ],
        {
          F: "#cookcraft:furnaces",
          I: "iron_ingot"
        }
    ).id("kubejs:furnace_minecart_direct")

})