// Unifies ores smelting recipes
// Script by vizthex
ServerEvents.tags("item", e => {

    // Add Forge tags to ore blocks that don't have them
    // I'm so tired of mod devs constantly forgetting this, man...
    e.add("forge:gems", ["forestry:apatite"])

    e.add("forge:nuggets", ["#forge:nuggets/coal", "#forge:nuggets/charcoal"])
    e.add("forge:nuggets/coal", ["minicoal:mini_coal"])
    e.add("forge:nuggets/charcoal", ["minicoal:mini_charcoal"])

    // Add a custom tag for use in smelting recipes
    // This is due to TE using the Forge tag, and I don't want to mess up the Raw Ore pulverizer recipes
	e.add("cookcraft:type/copper", ["#forge:dusts/copper", "#forge:raw_materials/copper", "#forge:ores/copper"])
    e.add("cookcraft:type/iron", ["#forge:dusts/iron", "#forge:raw_materials/iron", "#forge:ores/iron"])
    e.add("cookcraft:type/gold", ["#forge:dusts/gold", "#forge:raw_materials/gold", "#forge:ores/gold"])

    e.add("cookcraft:type/tin", ["#forge:dusts/tin", "#forge:raw_materials/tin", "#forge:ores/tin"])
/*
    e.add("cookcraft:type/lead", ["#forge:dusts/lead", "#forge:raw_materials/lead", "#forge:ores/lead"])
    e.add("cookcraft:type/silver", ["#forge:dusts/silver", "#forge:raw_materials/silver", "#forge:ores/silver"])
    e.add("cookcraft:type/nickel", ["#forge:dusts/nickel", "#forge:raw_materials/nickel", "#forge:ores/nickel"])
*/
})


// Unify all the recipes
// Priority: Thermal, Forestry
ServerEvents.recipes(e => {

    ///// Fix ores having a bajillion smelting recipes

    ///// Vanilla /////
    e.remove({type: "smelting", output: "copper_ingot"})
    e.remove({type: "smelting", output: "iron_ingot"})
    e.remove({type: "smelting", output: "gold_ingot"})
    e.remove({type: "smelting", output: "diamond"})

    e.remove({type: "blasting", output: "copper_ingot"})
    e.remove({type: "blasting", output: "iron_ingot"})
    e.remove({type: "blasting", output: "gold_ingot"})
    e.remove({type: "blasting", output: "diamond"})



    // Copper
    e.smelting("copper_ingot", "#cookcraft:type/copper", 0.5).id("kubejs:smelt_copper")
    e.blasting("copper_ingot", "#cookcraft:type/copper", 0.5).id("kubejs:blast_copper")

    // Iron
    e.smelting("iron_ingot", "#cookcraft:type/iron", 0.7).id("kubejs:smelt_iron")
    e.blasting("iron_ingot", "#cookcraft:type/iron", 0.7).id("kubejs:blast_iron")

    // Gold
    e.smelting("gold_ingot", "#cookcraft:type/gold", 1.5).id("kubejs:smelt_gold")
    e.blasting("gold_ingot", "#cookcraft:type/gold", 1.5).id("kubejs:blast_gold")



    ///// Ores no sane person would smelt but I'll fix them anyway to be consistent
    e.remove({type: "smelting", output: "coal"})
    e.remove({type: "smelting", output: "lapis_lazuli"})
    e.remove({type: "smelting", output: "redstone"})
    e.remove({type: "smelting", output: "diamond"})
    e.remove({type: "smelting", output: "emerald"})
    e.remove({type: "smelting", output: "quartz"})

    e.remove({type: "blasting", output: "coal"})
    e.remove({type: "blasting", output: "lapis_lazuli"})
    e.remove({type: "blasting", output: "redstone"})
    e.remove({type: "blasting", output: "diamond"})
    e.remove({type: "blasting", output: "emerald"})
    e.remove({type: "blasting", output: "quartz"})



    // Coal
    e.smelting("coal", "#forge:ores/coal", 0.25).id("kubejs:smelt_coal")
    e.blasting("coal", "#forge:ores/coal", 0.25).id("kubejs:blast_coal")

    // Lapis
    e.smelting("lapis_lazuli", "#forge:ores/lapis", 0.5).id("kubejs:smelt_lapis")
    e.blasting("lapis_lazuli", "#forge:ores/lapis", 0.5).id("kubejs:blast_lapis")

    // Redstone
    e.smelting("redstone", "#forge:ores/redstone", 1).id("kubejs:smelt_redstone")
    e.blasting("redstone", "#forge:ores/redstone", 1).id("kubejs:blast_redstone")

    // Diamond
    e.smelting("diamond", "#forge:ores/diamond", 2).id("kubejs:smelt_diamond")
    e.blasting("diamond", "#forge:ores/diamond", 2).id("kubejs:blast_diamond")

    // Emerald
    e.smelting("emerald", "#forge:ores/emerald", 2).id("kubejs:smelt_emerald")
    e.blasting("emerald", "#forge:ores/emerald", 2).id("kubejs:blast_emerald")

    // Nether Quartz
    e.smelting("quartz", "#forge:ores/quartz", 1).id("kubejs:smelt_nether_quartz")
    e.blasting("quartz", "#forge:ores/quartz", 1).id("kubejs:blast_nether_quartz")





    ///// Forestry /////
    e.remove({type: "smelting", output: "forestry:ingot_tin"})
    e.remove({type: "blasting", output: "forestry:ingot_tin"})

    e.remove({type: "smelting", output: "forestry:apatite"})
    e.remove({type: "blasting", output: "forestry:apatite"})

    // Tin
    e.smelting("forestry:ingot_tin", "#cookcraft:type/tin", 1).id("kubejs:smelt_tin")
    e.blasting("forestry:ingot_tin", "#cookcraft:type/tin", 1).id("kubejs:blast_tin")

    // Apatite
    e.smelting("forestry:apatite", "#forge:ores/apatite", 0.5).id("kubejs:smelt_apatite")
    e.blasting("forestry:apatite", "#forge:ores/apatite", 0.5).id("kubejs:blast_apatite")




/*
    ///// Thermal Series /////
    /// Main output, followed by Forestry, then Bigger Reactors, then Mekanism
    e.remove({type: "smelting", output: "thermal:tin_ingot"})
    e.remove({type: "smelting", output: "thermal:lead_ingot"})
    e.remove({type: "smelting", output: "thermal:silver_ingot"})
    e.remove({type: "smelting", output: "thermal:nickel_ingot"})

    e.remove({type: "blasting", output: "thermal:tin_ingot"})
    e.remove({type: "blasting", output: "thermal:lead_ingot"})
    e.remove({type: "blasting", output: "thermal:silver_ingot"})
    e.remove({type: "blasting", output: "thermal:nickel_ingot"})

    e.remove({type: "smelting", output: "thermal:niter"})
    e.remove({type: "smelting", output: "thermal:sulfur"})
    e.remove({type: "smelting", output: "thermal:cinnabar"})

    e.remove({type: "blasting", output: "thermal:niter"})
    e.remove({type: "blasting", output: "thermal:sulfur"})
    e.remove({type: "blasting", output: "thermal:cinnabar"})

    // Tin
    e.smelting("thermal:tin_ingot", "#cookcraft:type/tin", 1).id("kubejs:smelt_tin")
    e.blasting("thermal:tin_ingot", "#cookcraft:type/tin", 1).id("kubejs:blast_tin")

    // Lead
    e.smelting("thermal:lead_ingot", "#cookcraft:type/lead", 2).id("kubejs:smelt_lead")
    e.blasting("thermal:lead_ingot", "#cookcraft:type/lead", 2).id("kubejs:blast_lead")

    // Silver
    e.smelting("thermal:silver_ingot", "#cookcraft:type/silver", 2).id("kubejs:smelt_silver")
    e.blasting("thermal:silver_ingot", "#cookcraft:type/silver", 2).id("kubejs:blast_silver")

    // Nickel
    e.smelting("thermal:nickel_ingot", "#cookcraft:type/nickel", 2).id("kubejs:smelt_nickel")
    e.blasting("thermal:nickel_ingot", "#cookcraft:type/nickel", 2).id("kubejs:blast_nickel")

    // Sulfur
    e.smelting("thermal:sulfur", "#forge:ores/sulfur", 0.5).id("kubejs:smelt_sulfur")
    e.blasting("thermal:sulfur", "#forge:ores/sulfur", 0.5).id("kubejs:blast_sulfur")

    // Niter
    e.smelting("thermal:niter", "#forge:ores/niter", 0.5).id("kubejs:smelt_niter")
    e.blasting("thermal:niter", "#forge:ores/niter", 0.5).id("kubejs:blast_niter")

    // Cinnabar
    e.smelting("thermal:cinnabar", "#forge:ores/cinnabar", 0.5).id("kubejs:smelt_cinnabar")
    e.blasting("thermal:cinnabar", "#forge:ores/cinnabar", 0.5).id("kubejs:blast_cinnabar")
*/
})