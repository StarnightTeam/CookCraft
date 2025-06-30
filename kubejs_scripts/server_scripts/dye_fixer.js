// Fixes dye recipes not using tags because mojang apparently forgot this amazing system existed (although the recipe spam is mostly from mods... but still, i find it quite irksome)
// Script by vizthex
ServerEvents.tags("item", e => {

    e.add("forge:dyes/green", ["quark:moss_paste"])
    //e.add("forge:dyes/yellow", ["thermal:sulfur_dust"])

    // White
    e.add("cookcraft:dye_materials/white", ["bone_meal", "lily_of_the_valley", "veggiesdelight:wild_garlic", "#forge:dusts/salt"])


    // Orange
    e.add("cookcraft:dye_materials/orange", ["carrot", "glow_berries", "orange_tulip", "torchflower"])
    e.add("cookcraft:dye_materials/orange_double", ["mushroomquest:penny_bun"])


    // Magenta
    e.add("cookcraft:dye_materials/magenta", ["allium", "bubble_coral", "bubble_coral_fan"])
    e.add("cookcraft:dye_materials/magenta_double", ["lilac"])


    // Light Blue
    e.add("cookcraft:dye_materials/light_blue", ["blue_orchid", "mushroomquest:dewdrop_bonnet", "mushroomquest:werewere_kokako"])


    // Yellow
    e.add("cookcraft:dye_materials/yellow", ["dandelion", "horn_coral", "horn_coral_fan", "mushroomquest:golden_chanterelle", "mushroomquest:yellow_stainer"])
    e.add("cookcraft:dye_materials/yellow_double", ["sunflower"])
    e.add("cookcraft:dye_materials/yellow_triple", ["veggiesdelight:mature_dandelion"])
    e.add("cookcraft:dye_materials/yellow_smeltable", ["mushroomquest:dyers_polypore", "mushroomquest:henofthe_woods", "mushroomquest:witchs_butter"])


    // Lime
    // The Sea Pickle has its own Separator recipe
    e.add("cookcraft:dye_materials/lime_smeltable", ["sea_pickle", "mushroomquest:oyster_mushroom"])


    // Pink
    e.add("cookcraft:dye_materials/pink", ["pink_petals", "pink_tulip", "brain_coral", "brain_coral_fan", "mushroomquest:meadow_mushroom"])
    e.add("cookcraft:dye_materials/pink_double", ["peony", "mushroomquest:pink_waxcap"])


    // Gray
    e.add("cookcraft:dye_materials/gray", ["mushroomquest:black_velvet_bolete", "mushroomquest:dead_mans_fingers"])


    // Light Gray
    e.add("cookcraft:dye_materials/light_gray", ["azure_bluet", "oxeye_daisy", "white_tulip", "biomesoplenty:endbloom"])


    // Cyan
    e.add("cookcraft:dye_materials/cyan", ["mushroomquest:bluing_bolete", "mushroomquest:verdigris_agaric"])
    e.add("cookcraft:dye_materials/cyan_double", ["pitcher_plant"])


    // Purple (best colour)
    e.add("cookcraft:dye_materials/purple", ["ends_delight:chorus_succulent", 
    "mushroomquest:silver_leaf_fungus", "mushroomquest:violet_cort"])
    e.add("cookcraft:dye_materials/purple_smeltable", ["mushroomquest:cinnamon_bracket", "mushroomquest:wood_blewit"])


    // Blue
    e.add("cookcraft:dye_materials/blue", ["cornflower", "lapis_lazuli", "tube_coral", "tube_coral_fan", "mushroomquest:blue_chanterelle"])


    // Brown
    e.add("cookcraft:dye_materials/brown", ["brown_mushroom", "cocoa_beans", "mushroomquest:brown_roll_rim"])
    e.add("cookcraft:dye_materials/brown_double", ["mushroomquest:giant_puffball"])
    e.add("cookcraft:dye_materials/brown_smeltable", ["mushroomquest:artist_conk_block", "mushroomquest:lingzhi_mushroom", "mushroomquest:turkey_tail"])

    // Green
    e.add("cookcraft:dye_materials/green_smeltable", ["cactus", "small_dripleaf", "big_dripleaf", "pamhc2crops:barrelcactusitem"])


    // Red
    e.add("cookcraft:dye_materials/red", ["apple", "beetroot", "poppy", "red_mushroom", "red_tulip", "spider_eye", "sweet_berries", "fire_coral", "fire_coral_fan"])
    e.add("cookcraft:dye_materials/red_double", ["rose_bush", "mushroomquest:bleeding_fairy_helmet", "mushroomquest:bleeding_tooth_fungus", "mushroomquest:red_tear_mushroom", "mushroomquest:strawberry_bracket"])

    // Black
    e.add("cookcraft:dye_materials/black", ["ink_sac", "wither_rose"])
    e.add("cookcraft:dye_materials/black_double", ["mushroomquest:shaggy_mane_block"])

})





// Change dye recipes to use the above tags
// Only wet & dry items require smelting (like in vanilla)
ServerEvents.recipes(e => {

    // Removals
    e.remove({type: "crafting_shapeless", output: "white_dye"})
    e.remove({type: "crafting_shapeless", output: "orange_dye"})
    e.remove({type: "crafting_shapeless", output: "magenta_dye"})
    e.remove({type: "crafting_shapeless", output: "light_blue_dye"})
    e.remove({type: "smelting", output: "light_blue_dye"})
    e.remove({type: "crafting_shapeless", output: "yellow_dye"})
    e.remove({type: "smelting", output: "lime_dye"})
    e.remove({type: "crafting_shapeless", output: "pink_dye"})
    e.remove({type: "crafting_shapeless", output: "gray_dye"})
    e.remove({type: "crafting_shapeless", output: "light_gray_dye"})
    e.remove({type: "crafting_shapeless", output: "cyan_dye"})
    e.remove({type: "crafting_shapeless", output: "purple_dye"})
    e.remove({type: "crafting_shapeless", output: "blue_dye"})
    e.remove({type: "crafting_shapeless", output: "brown_dye"})
    e.remove({type: "crafting_shapeless", output: "green_dye"})
    e.remove({type: "smelting", output: "green_dye"})
    e.remove({type: "crafting_shapeless", output: "red_dye"})
    e.remove({type: "crafting_shapeless", output: "black_dye"})

    // White
    e.shapeless("white_dye", ["#cookcraft:dye_materials/white"]).id("kubejs:white_dye")

    // Orange
    e.shapeless("orange_dye", ["#cookcraft:dye_materials/orange"]).id("kubejs:orange_dye")
    e.shapeless("2x orange_dye", ["#forge:dyes/yellow", "#forge:dyes/red"]).id("kubejs:orange_dye_combine")

    // Magenta
    e.shapeless("magenta_dye", ["#cookcraft:dye_materials/magenta"]).id("kubejs:magenta_dye")
    e.shapeless("2x magenta_dye", ["#cookcraft:dye_materials/magenta_double"]).id("kubejs:magenta_dye_double")
    e.shapeless("2x magenta_dye", ["#forge:dyes/purple", "#forge:dyes/pink"]).id("kubejs:magenta_dye_combine")
    e.shapeless("3x magenta_dye", ["#forge:dyes/red", "#forge:dyes/blue", "#forge:dyes/pink"]).id("kubejs:magenta_dye_triple_combine")
    e.shapeless("4x magenta_dye", ["#forge:dyes/red", "#forge:dyes/red", "#forge:dyes/blue", "#forge:dyes/white"]).id("kubejs:magenta_dye_quadruple_combine")

    // Light Blue
    e.shapeless("light_blue_dye", ["#cookcraft:dye_materials/light_blue"]).id("kubejs:light_blue_dye")
    e.shapeless("2x light_blue_dye", ["#forge:dyes/white", "#forge:dyes/blue"]).id("kubejs:light_blue_dye_combine")

    // Yellow
    e.shapeless("yellow_dye", ["#cookcraft:dye_materials/yellow"]).id("kubejs:yellow_dye")
    e.shapeless("3x yellow_dye", ["#cookcraft:dye_materials/yellow_triple"]).id("kubejs:yellow_dye_triple")
    e.shapeless("2x yellow_dye", ["#cookcraft:dye_materials/yellow_double"]).id("kubejs:yellow_dye_combine")

    e.smelting("yellow_dye", ["#cookcraft:dye_materials/yellow_smeltable"], 1).id("kubejs:smelt_yellow")

    // Lime
    e.smelting("lime_dye", ["#cookcraft:dye_materials/lime_smeltable"], 1).id("kubejs:smelt_lime")

    // Pink
    e.shapeless("pink_dye", ["#cookcraft:dye_materials/pink"]).id("kubejs:pink_dye")
    e.shapeless("2x pink_dye", ["#cookcraft:dye_materials/pink_double"]).id("kubejs:pink_dye_double")
    e.shapeless("2x pink_dye", ["#forge:dyes/white", "#forge:dyes/red"]).id("kubejs:pink_dye_combine")

    // Gray
    e.shapeless("gray_dye", ["#cookcraft:dye_materials/gray"]).id("kubejs:gray_dye")
    e.shapeless("gray_dye", ["#forge:dyes/white", "#forge:dyes/black"]).id("kubejs:gray_dye_combine")

    // Light Gray
    e.shapeless("light_gray_dye", ["#cookcraft:dye_materials/light_gray"]).id("kubejs:light_gray_dye")
    e.shapeless("2x light_gray_dye", ["#forge:dyes/white", "#forge:dyes/gray"]).id("kubejs:light_gray_dye_combine")
    e.shapeless("3x light_gray_dye", ["#forge:dyes/white", "#forge:dyes/white", "#forge:dyes/black"]).id("kubejs:light_gray_dye_triple_combine")

    // Cyan
    e.shapeless("cyan_dye", ["#cookcraft:dye_materials/cyan"]).id("kubejs:cyan_dye")
    e.shapeless("2x cyan_dye", ["#cookcraft:dye_materials/cyan_double"]).id("kubejs:cyan_dye_double")
    e.shapeless("2x cyan_dye", ["#forge:dyes/green", "#forge:dyes/blue"]).id("kubejs:cyan_dye_combine")

    // Purple
    e.shapeless("purple_dye", ["#cookcraft:dye_materials/purple"]).id("kubejs:purple_dye")
    e.shapeless("2x purple_dye", ["#forge:dyes/red", "#forge:dyes/blue"]).id("kubejs:purple_dye_combine")
    e.smelting("purple_dye", ["#cookcraft:dye_materials/purple_smeltable"], 1).id("kubejs:smelt_purple")

    // Blue
    e.shapeless("blue_dye", ["#cookcraft:dye_materials/blue"]).id("kubejs:blue_dye")
    e.shapeless("blue_dye", ["#forge:dyes/black", "#forge:dyes/light_blue"]).id("kubejs:blue_dye_combine")

    // Brown
    e.shapeless("brown_dye", ["#cookcraft:dye_materials/brown"]).id("kubejs:brown_dye")
    e.shapeless("2x brown_dye", ["#cookcraft:dye_materials/brown_double"]).id("kubejs:brown_dye_double")
    e.smelting("brown_dye", ["#cookcraft:dye_materials/brown_smeltable"], 1).id("kubejs:smelt_brown")

    // Green
    e.smelting("green_dye", ["#cookcraft:dye_materials/green_smeltable"], 1).id("kubejs:smelt_green")
    e.smelting("green_dye", "scute", 2).id("kubejs:scute_green")

    // Red
    e.shapeless("red_dye", ["#cookcraft:dye_materials/red"]).id("kubejs:red_dye")
    e.shapeless("2x red_dye", ["#cookcraft:dye_materials/red_double"]).id("kubejs:red_dye_double")

    // Black
    e.shapeless("black_dye", ["#cookcraft:dye_materials/black"]).id("kubejs:black_dye")
    e.shapeless("2x black_dye", ["#cookcraft:dye_materials/black_double"]).id("kubejs:black_dye_double")
    e.shapeless("2x black_dye", ["charcoal", "charcoal"]).id("kubejs:charcoal_black")


/*
    ///// Dye extraction recipes
    // Uses 1,600 RF and gives 1 XP (2 XP for double output)
    e.remove({id: "thermal:machines/centrifuge/centrifuge_lily_of_the_valley"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_orange_tulip"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_allium"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_blue_orchid"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_dandelion"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_sunflower"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_lilac"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_peony"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_pink_tulip"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_azure_bluet"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_oxeye_daisy"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_white_tulip"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_cornflower"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_poppy"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_red_tulip"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_rose_bush"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_wither_rose"})

    // White
    e.recipes.thermal.centrifuge(["3x white_dye"], "#cookcraft:dye_materials/white", 1).energy(1600).id("kubejs:extract_white_dye")

    // Orange
    e.recipes.thermal.centrifuge(["3x orange_dye"], "#cookcraft:dye_materials/orange", 1).energy(1600).id("kubejs:extract_orange_dye")
    e.recipes.thermal.centrifuge(["6x orange_dye"], "pumpkin", 3).energy(1600).id("kubejs:extract_pumpkin_orange_dye")
    e.recipes.thermal.centrifuge(["3x orange_dye", Item.of("3x orange_dye").withChance(0.5)], "carved_pumpkin", 2).energy(1600).id("kubejs:extract_carved_pumpkin_orange_dye")
    e.recipes.thermal.centrifuge(["3x orange_dye", Item.of("2x minicoal:mini_charcoal").withChance(0.75)], ["jack_o_lantern", "autumnity:soul_jack_o_lantern"], 3).energy(1600).id("kubejs:extract_jack_o_lantern")
    e.recipes.thermal.centrifuge(["3x orange_dye", Item.of("redstone").withChance(0.75)], "autumnity:redstone_jack_o_lantern", 3).energy(1600).id("kubejs:extract_redstone_jack_o_lantern")

    // Magenta
    e.recipes.thermal.centrifuge(["3x magenta_dye"], "#cookcraft:dye_materials/magenta", 1).energy(1600).id("kubejs:extract_magenta_dye")
    e.recipes.thermal.centrifuge(["6x magenta_dye"], "#cookcraft:dye_materials/magenta_double", 2).energy(1600).id("kubejs:extract_double_magenta_dye")

    // Light Blue
    e.recipes.thermal.centrifuge(["3x light_blue_dye"], "#cookcraft:dye_materials/light_blue_extractables_thermal", 1).energy(1600).id("kubejs:extract_light_blue_dye")
    e.recipes.thermal.centrifuge(["6x light_blue_dye"], "#cookcraft:dye_materials/light_blue_double", 2).energy(1600).id("kubejs:extract_double_light_blue_dye")

    // Yellow
    e.recipes.thermal.centrifuge(["3x yellow_dye"], "#cookcraft:dye_materials/yellow", 1).energy(1600).id("kubejs:extract_yellow_dye")
    e.recipes.thermal.centrifuge(["6x yellow_dye"], "#cookcraft:dye_materials/yellow_double", 2).energy(1600).id("kubejs:extract_double_yellow_dye")

    // Lime
    e.recipes.thermal.centrifuge(["3x lime_dye"], "#cookcraft:dye_materials/lime", 1).energy(1600).id("kubejs:extract_lime_dye")
    e.recipes.thermal.centrifuge(["6x lime_dye"], "#cookcraft:dye_materials/lime_double", 2).energy(1600).id("kubejs:extract_double_lime_dye")
    e.recipes.thermal.centrifuge(["2x lime_dye"], "sea_pickle", 0.2).energy(1600).id("kubejs:extract_sea_pickle_lime_dye")

    // Pink
    e.recipes.thermal.centrifuge(["3x pink_dye"], "#cookcraft:dye_materials/pink", 1).energy(1600).id("kubejs:extract_pink_dye")
    e.recipes.thermal.centrifuge(["6x pink_dye"], "#cookcraft:dye_materials/pink_double", 2).energy(1600).id("kubejs:extract_double_pink_dye")

    // Gray
    e.recipes.thermal.centrifuge(["3x gray_dye"], "#cookcraft:dye_materials/gray", 1).energy(1600).id("kubejs:extract_gray_dye")

    // Light Gray
    e.recipes.thermal.centrifuge(["3x light_gray_dye"], "#cookcraft:dye_materials/light_gray", 1).energy(1600).id("kubejs:extract_light_gray_dye")

    // Cyan
    e.recipes.thermal.centrifuge(["3x cyan_dye"], "#cookcraft:dye_materials/cyan_extractables_thermal", 1).energy(1600).id("kubejs:extract_cyan_dye")
    e.recipes.thermal.centrifuge(["6x cyan_dye"], "#cookcraft:dye_materials/cyan_double", 2).energy(1600).id("kubejs:extract_double_cyan_dye")
    e.recipes.thermal.centrifuge(["6x cyan_dye"], "outer_end:spectragel", 4).energy(1600).id("kubejs:extract_spectral_dye") 
    e.recipes.thermal.centrifuge(["2x cyan_dye", "2x light_blue_dye"], "#forge:gems/apatite", 3).energy(2000).id("kubejs:extract_apatite_dye")

    // Purple
    e.recipes.thermal.centrifuge(["3x purple_dye"], "#cookcraft:dye_materials/purple", 1).energy(1600).id("kubejs:extract_purple_dye")
    e.recipes.thermal.centrifuge(["6x purple_dye"], "#cookcraft:dye_materials/purple_double", 2).energy(1600).id("kubejs:extract_double_purple_dye")

    // Blue
    e.recipes.thermal.centrifuge(["3x blue_dye"], "#cookcraft:dye_materials/blue_extractables", 1).energy(1600).id("kubejs:extract_blue_dye")
    e.recipes.thermal.centrifuge(["2x blue_dye"], "lapis_lazuli", 2).energy(2000).id("kubejs:extract_lapis_blue_dye")

    // Brown
    e.recipes.thermal.centrifuge(["3x brown_dye"], "#cookcraft:dye_materials/brown", 1).energy(1600).id("kubejs:extract_brown_dye")
    e.recipes.thermal.centrifuge(["6x brown_dye"], "#cookcraft:dye_materials/brown_double", 2).energy(1600).id("kubejs:extract_double_brown_dye")

    // Green
    e.recipes.thermal.centrifuge(["3x green_dye"], "#cookcraft:dye_materials/green_extractables_thermal", 1).energy(1600).id("kubejs:extract_green_dye")
    e.recipes.thermal.centrifuge(["6x green_dye"], "#cookcraft:dye_materials/green_double", 2).energy(1600).id("kubejs:extract_double_green_dye")
    e.recipes.thermal.centrifuge(["2x green_dye", Item.of("2x lime_dye").withChance(0.5)], "scute", 3).energy(1800).id("kubejs:extract_scute_dye")

    // Red
    e.recipes.thermal.centrifuge(["3x red_dye"], "#cookcraft:dye_materials/red_extractables_thermal", 1).energy(1600).id("kubejs:extract_red_dye")
    e.recipes.thermal.centrifuge(["6x red_dye"], "#cookcraft:dye_materials/red_double", 2).energy(1600).id("kubejs:extract_double_red_dye")

    // Black
    e.recipes.thermal.centrifuge(["3x black_dye"], "#cookcraft:dye_materials/black", 1).energy(1600).id("kubejs:extract_black_dye")
    e.recipes.thermal.centrifuge(["2x black_dye", Fluid.of("thermal:crude_oil", 25)], "#minecraft:coals", 3).energy(2000).id("kubejs:extract_black_dye_from_coal")


    // Xychorium dyes
    // Uses half as much RF as the Extractor and gives double the dye
    e.recipes.thermal.centrifuge(["xycraft_world:xychorium_gem_light", "2x blue_dye"], "xycraft_world:xychorium_gem_blue", 3).energy(2000).id("kubejs:xychorium_blue")
    e.recipes.thermal.centrifuge(["xycraft_world:xychorium_gem_light", "2x green_dye"], "xycraft_world:xychorium_gem_green", 3).energy(2000).id("kubejs:xychorium_green")
    e.recipes.thermal.centrifuge(["xycraft_world:xychorium_gem_light", "2x red_dye"], "xycraft_world:xychorium_gem_red", 3).energy(2000).id("kubejs:xychorium_red")
    e.recipes.thermal.centrifuge(["xycraft_world:xychorium_gem_light", "2x black_dye"], "xycraft_world:xychorium_gem_dark", 3).energy(2000).id("kubejs:xychorium_black")
    e.recipes.thermal.centrifuge(["4x white_dye"], "xycraft_world:xychorium_gem_light", 3).energy(2000).id("kubejs:xychorium_white")
*/
})