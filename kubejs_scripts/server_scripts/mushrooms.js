// Changes tags and recipes for items from Mushroom Quest
// Script fixed by vizthex
ServerEvents.tags("block", e => {
    // Makes stumps mineable with an axe
    // Added by Lyria
    [
        "oak_stump_2",
        "spruce_stump_2",
        "acacia_stump_2",
        "birch_trunk_2",
        "jungle_trunk_2",
        "field_trunk_2"
    ].forEach(name => {
        e.add("minecraft:mineable/axe", `mushroomquest:${name}`)
    })

})


ServerEvents.tags("item", e => {

    // Add Mushroom Caps to the mushroomcaps tag (unused right now, is supposed to make the mushroom caps wearable as helmets)
    // Added by Lyria
    const caps = [
        "gray", "red", "brown", "yellow", "aqua", "blue", "purple", "green", "pink"
    ]

    caps.forEach(color => {
        e.add("mushroomquestplus:mushroomcaps", `mushroomquest:${color}_mushroom_cap`)
    })

})


ServerEvents.recipes(e => {

    // Make recipes use either type of Mushroom Cap
    // Added by Fisherman
    e.replaceInput(
      { input: "mushroomquest:gray_mushroom_cap" },
        "mushroomquest:gray_mushroom_cap",
        "#mushroomquestplus:mushroomcaps"
    )

    // Craft the red mushroom cap with the mushrooms tag
    e.shaped(
    "mushroomquest:red_mushroom_cap",
        [
          "AAA",
          "A A"
        ],
        {
          A: "#mushroomquest:mushrooms"
        }
    ).id("kubejs:red_mushroom_cap")

    // Mossy Cobblestone with Maze Polypores
    e.remove({ id: "mushroomquest:mossymazepolyporer" })
    e.remove({ id: "mushroomquest:mossymazepolyporer2" })
    e.shaped(
      "8x mossy_cobblestone",
        [
          "AAA",
          "ASA",
          "AAA"
        ],
        {
          A: "cobblestone",
          S: "mushroomquest:mossy_maze_polypore_block"
        }
    ).id("kubejs:mossy_cobblestone_with_polypore")

    // Mossy Stone Bricks with Maze Polypores
    e.shaped(
    "8x mossy_stone_bricks",
        [
          "AAA",
          "ASA",
          "AAA"
        ],
        {
            A: "stone_bricks",
            S: "mushroomquest:mossy_maze_polypore_block"
        }
    ).id("kubejs:mossy_stone_bricks_with_polypore")

})