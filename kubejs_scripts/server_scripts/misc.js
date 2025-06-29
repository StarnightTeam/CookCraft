// Adds misc recipes that don't fit elsewhere
ServerEvents.recipes(e => {

    // Remove the Tapioca Pearl recipe
    e.remove([{ type: "minecraft:smelting", output: "cozyfoods:tapioca_pearls" }, { type: "minecraft:smoking", output: "cozyfoods:tapioca_pearls" }])

})